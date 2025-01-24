import React from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import RoadmapForm from '../../components/forms/RoadmapForm';
import { createRoadmap } from '../../services/roadmapService';
import { useRouter } from 'next/router';
import { Roadmap } from '../../types/Roadmap';

const CreateRoadmapPage: React.FC = () => {
  const router = useRouter();

  const handleCreate = async (roadmap: Roadmap) => {
    await createRoadmap(roadmap);
    router.push('/roadmaps');
  };

  return (
    <MainLayout>
      <h1>Cadastrar Roadmap</h1>
      <RoadmapForm
        initialValues={{ title: '', description: '', teamIds: [] }}
        onSubmit={handleCreate}
      />
    </MainLayout>
  );
};

export default CreateRoadmapPage;
