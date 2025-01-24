import React, { useState, useEffect } from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import { getAllRoadmaps, deleteRoadmap } from '../../services/roadmapService';
import { Roadmap } from '../../types/Roadmap';
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

const RoadmapsPage: React.FC = () => {
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);

  useEffect(() => {
    const fetchRoadmaps = async () => {
      const roadmapsData = await getAllRoadmaps();
      setRoadmaps(roadmapsData);
    };
    fetchRoadmaps();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteRoadmap(id);
    setRoadmaps(roadmaps.filter((roadmap) => roadmap.id !== id));
  };

  return (
    <MainLayout>
      <h1>Lista de Roadmaps</h1>
      <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>
        <Link href="/roadmaps/create" style={{ textDecoration: 'none', color: 'white' }}>
          Cadastrar Roadmap
        </Link>
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Título</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roadmaps.map((roadmap) => (
              <TableRow key={roadmap.id}>
                <TableCell>{roadmap.title}</TableCell>
                <TableCell>{roadmap.description}</TableCell>
                <TableCell>
                  <Link href={`/roadmaps/${roadmap.id}`} style={{ textDecoration: 'none' }}>
                    <IconButton aria-label="edit" color="primary">
                      <EditIcon />
                    </IconButton>
                  </Link>
                  <IconButton aria-label="delete" color="secondary" onClick={() => handleDelete(roadmap.id || '')}>
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

export default RoadmapsPage;
