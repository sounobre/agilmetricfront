import React, { useState, useEffect } from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import { getAllUsers, deleteUser } from '../../services/userService';
import { User } from '../../types/User';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
} from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import Link from 'next/link';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getAllUsers();
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <MainLayout>
      <h1>Lista de Usuários</h1>
      <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>
        <Link href="/users/create" style={{ textDecoration: 'none', color: 'white' }}>
          Cadastrar Usuário
        </Link>
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Posição</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.position}</TableCell>
                <TableCell>
                  <Link href={`/users/${user.id}`} style={{ textDecoration: 'none' }}>
                    <IconButton aria-label="edit" color="primary">
                      <EditIcon />
                    </IconButton>
                  </Link>
                  <IconButton aria-label="delete" color="secondary" onClick={() => handleDelete(user.id || '')}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainLayout>
  );
};

export default UsersPage;
