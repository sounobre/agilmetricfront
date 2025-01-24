import React, { useState, useEffect } from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import { getAllTasks, deleteTask } from '../../services/taskService';
import { Task } from '../../types/Task';
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

const TasksPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await getAllTasks();
      setTasks(tasksData);
    };
    fetchTasks();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <MainLayout>
      <h1>Lista de Tarefas</h1>
      <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>
        <Link href="/tasks/create" style={{ textDecoration: 'none', color: 'white' }}>
          Cadastrar Tarefa
        </Link>
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Horas Estimadas</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.estimatedHours}</TableCell>
                <TableCell>
                  <Link href={`/tasks/${task.id}`} style={{ textDecoration: 'none' }}>
                    <IconButton aria-label="edit" color="primary">
                      <EditIcon />
                    </IconButton>
                  </Link>
                  <IconButton aria-label="delete" color="secondary" onClick={() => handleDelete(task.id || '')}>
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

export default TasksPage;
