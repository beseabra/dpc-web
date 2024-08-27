import { createMember, deleteMember, getMembers, updateMember } from "@/app/api/actions/membersAction";
import Button from "@/components/atomos/button/Button";
import InputForms from "@/components/atomos/InputForms/InputForms";
import { Box, CircularProgress, MenuItem, Modal, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ImagePicker from "../ImagePicker/ImagePicker";
import styles from "./ModalMemberAdd.module.css";

export interface Member {
  id: string;
  image: string;
  name: string;
  lattes: string;
  email: string;
  type: string;
}

interface ModalUpdateSideBarProps {
  modal: boolean;
  setModal: (modal: boolean) => void;
}

type MemberForm = Omit<Member, 'id'>;

export default function ModelMemberAdd({ modal, setModal }: ModalUpdateSideBarProps) {
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState<Member[]>([]);
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);
  const [member, setMember] = useState<MemberForm>({
    image: "",
    name: "",
    lattes: "",
    email: "",
    type: "",
  });

  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (modal) {
      loadMembers();
    }
  }, [modal]);

  const loadMembers = async () => {
    setLoading(true);
    try {
      const fetchedMembers: Member[] = await getMembers();
      setMembers(fetchedMembers);
    } catch (error) {
      console.error("Erro ao carregar os membros:", error);
      alert("Erro ao carregar os membros.");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const memberId = event.target.value as string;
    setSelectedMemberId(memberId);

    const selected = members.find((member) => member.id === memberId);
    if (selected) {
      setMember(selected);
      setProfileImageUrl(selected.image || "");
    }
  };

  const handleImageUpload = (url: string) => {
    setProfileImageUrl(url);
    setMember((prevMember) => ({ ...prevMember, image: url }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setMember((prevMember) => ({
      ...prevMember,
      [id]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", profileImageUrl || "");
      formData.append("name", member.name);
      formData.append("lattes", member.lattes);
      formData.append("email", member.email);
      formData.append("type", member.type);

      if (selectedMemberId) {
        await updateMember(selectedMemberId, formData);
        alert("Membro atualizado com sucesso!");
      } else {
        await createMember(formData);
        alert("Membro criado com sucesso!");
      }

      setModal(false);
      loadMembers(); 
    } catch (error) {
      console.error("Ocorreu um erro ao salvar o membro:", error);
      alert("Erro ao salvar o membro. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (selectedMemberId) {
      const confirmDelete = confirm("Tem certeza que deseja deletar este membro?");
      if (confirmDelete) {
        setLoading(true);
        try {
          await deleteMember(selectedMemberId);
          alert("Membro deletado com sucesso!");
          setSelectedMemberId(null);
          setMember({
            image: "",
            name: "",
            lattes: "",
            email: "",
            type: "",
          });
          loadMembers();
        } catch (error) {
          console.error("Erro ao deletar o membro:", error);
          alert("Erro ao deletar o membro.");
        } finally {
          setLoading(false);
        }
      }
    }
  };

  return (
    <Modal
      open={modal}
      onClose={() => setModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={styles.container}
    >
      <Box className={styles.modalContainer}>
        <Typography id="modal-modal-title" variant="h6" component="h2" className={styles.title}>
          Editar Membros
        </Typography>

        <Select
          value={selectedMemberId || ""}
          onChange={handleSelectChange}
          displayEmpty
          fullWidth
          variant="outlined"
          style={{ marginBottom: "1rem" }}
        >
          <MenuItem value="">Selecione um membro para editar ou crie um novo</MenuItem>
          {members.map((member) => (
            <MenuItem key={member.id} value={member.id}>
              {member.name}
            </MenuItem>
          ))}
        </Select>

        <form className={styles.forms} onSubmit={handleSubmit}>
          <div>
            <Typography variant="h6" component="h2" className={styles.subtitle}>
              Imagem
            </Typography>
            <ImagePicker
              id="members"
              name="members"
              label="Selecionar Imagem"
              onImageUpload={handleImageUpload}
              bucketRoute="public/members/"
            />
            <InputForms
              label="Nome"
              type="text"
              id="name"
              value={member.name}
              onChange={handleChange}
            />
            <InputForms
              label="Lattes"
              type="text"
              id="lattes"
              value={member.lattes}
              onChange={handleChange}
            />
            <InputForms
              label="Email"
              type="email"
              id="email"
              value={member.email}
              onChange={handleChange}
            />
            <InputForms
              label="Tipo"
              type="text"
              id="type"
              value={member.type}
              onChange={handleChange}
            />
          </div>
          <div className={styles.buttonGroup}>
            <Button
              text={loading ? "Salvando..." : selectedMemberId ? "Atualizar" : "Criar"}
              color="var(--quaternary-color)"
              type="submit"
            />
            {selectedMemberId && (
              <Button
                text="Deletar"
                color="red"
                onClick={handleDelete}
              />
            )}
          </div>
          {loading && (
            <div className={styles.loading}>
              <CircularProgress />
            </div>
          )}
        </form>
      </Box>
    </Modal>
  );
}
