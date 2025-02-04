"use client";
import { updateUser } from "@/app/api/actions/authActions";
import InputForms from "@/components/atomos/InputForms/InputForms";
import Button from "@/components/atomos/button/Button";
import { useState } from "react";
import styles from "./EditMemberModal.module.css";

interface EditMemberModalProps {
  user: any;
  onClose: () => void;
  onUpdate: () => void;
}

export default function EditMemberModal({ user, onClose, onUpdate }: EditMemberModalProps) {
  const [formData, setFormData] = useState({
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    lattes: user.lattes,
    position: user.position,
    formation: user.formation,
    institution: user.institution,
    image: user.image,
    typeUser: user.typeUser,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name) newErrors.name = "Nome é obrigatório.";
    if (!formData.lastName) newErrors.lastName = "Sobrenome é obrigatório.";
    if (!formData.email) newErrors.email = "Email é obrigatório.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Email inválido.";
    if (!formData.phone) newErrors.phone = "Telefone é obrigatório.";
    else if (!/^\d+$/.test(formData.phone)) newErrors.phone = "Telefone deve conter apenas números.";
    else if (formData.phone.length < 10) newErrors.phone = "Telefone deve ter pelo menos 10 dígitos.";
    if (!formData.typeUser) newErrors.typeUser = "Tipo de usuário é obrigatório.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setShowConfirmation(true); // Mostra o modal de confirmação
  };

  const handleConfirm = async () => {
    setShowConfirmation(false);
    setLoading(true);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    data.append("id", user.id);

    try {
      const result = await updateUser(data);
      if (result.success) {
        alert("Usuário atualizado com sucesso!");
        onUpdate();
        onClose();
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert("Erro ao atualizar usuário.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.modalBackground} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>Editar Membro</h2>
        <form onSubmit={handleSubmit}>
          <InputForms
            id="name"
            type="text"
            name="name"
            label="Nome"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
          />
          <InputForms
            id="lastName"
            type="text"
            name="lastName"
            label="Sobrenome"
            value={formData.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
          <InputForms
            id="email"
            type="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <InputForms
            id="phone"
            type="tel"
            name="phone"
            label="Telefone"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
          />
          <InputForms
            id="lattes"
            type="text"
            name="lattes"
            label="Lattes"
            value={formData.lattes}
            onChange={handleChange}
          />
          <InputForms
            id="position"
            type="text"
            name="position"
            label="Posição"
            value={formData.position}
            onChange={handleChange}
          />
          <InputForms
            id="formation"
            type="text"
            name="formation"
            label="Formação"
            value={formData.formation}
            onChange={handleChange}
          />
          <InputForms
            id="institution"
            type="text"
            name="institution"
            label="Instituição"
            value={formData.institution}
            onChange={handleChange}
          />
          <div className={styles.formGroup}>
            <label htmlFor="typeUser">Tipo de Usuário</label>
            <select
              id="typeUser"
              name="typeUser"
              value={formData.typeUser}
              onChange={handleChange}
            >
              <option value="user">Usuário</option>
              <option value="admin">Admin</option>
              <option value="reviewer">Revisor</option>
            </select>
            {errors.typeUser && <span className={styles.error}>{errors.typeUser}</span>}
          </div>
          <div className={styles.buttonContainer}>
            <Button
              text="Cancelar"
              onClick={onClose}
              color="#ccc"
              textColor="#000"
              type="button"
            />
            <Button
              text= "Salvar"
              type="submit"
              color="#007bff"
            />
          </div>
        </form>

        {showConfirmation && (
          <div className={styles.confirmationModal}>
            <p>Tem certeza que deseja salvar as alterações?</p>
            <div className={styles.confirmationButtons}>
              <Button
                text="Cancelar"
                onClick={() => setShowConfirmation(false)}
                color="#ccc"
                textColor="#000"
              />
              <Button
                text="Confirmar"
                onClick={handleConfirm}
                color="#007bff"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}