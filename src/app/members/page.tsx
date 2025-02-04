"use client";
import ButtonEdit from "@/components/atomos/ButtonEdit/ButtonEdit";
import EditMemberModal from "@/components/moleculas/EditMemberModal/EditMemberModal";
import SearchIcon from "@mui/icons-material/Search";
import { CircularProgress, InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllUsers } from "../api/actions/authActions";
import styles from "./members.module.css";


export default function Members() {
  const [users, setUsers] = useState<any[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const usersPerPage = 7;

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const users = await getAllUsers();
      setUsers(users);
      setFilteredUsers(users);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.typeUser.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
    setCurrentPage(1); // Resetar para a primeira página ao filtrar
  }, [searchTerm, users]);

  const handleEditClick = (user: any) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleUpdate = () => {
    fetchUsers();
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      <h1>Lista de Membros</h1>
      

      <div className={styles.filters}>
          <TextField
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Filtrar por nome, email ou tipo"
          />
        </div>
      {loading ? (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Tipo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.name} {user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.typeUser}</td>
                  <td>
                    <ButtonEdit onClick={() => handleEditClick(user)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.pagination}>
            {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? styles.active : ""}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}

      {isModalOpen && selectedUser && (
        <EditMemberModal
          user={selectedUser}
          onClose={handleCloseModal}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}