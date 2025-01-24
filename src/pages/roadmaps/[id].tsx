import React, { useState, useEffect } from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import RoadmapForm from '../../components/forms/RoadmapForm';
import { getRoadmapById, updateRoadmap } from '../../services/roadmapService'
import { useRouter } from 'next/router';
import { Roadmap } from '../../types/Roadmap';

const EditRoadmapPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);

  useEffect(() => {
    const fetchRoadmap = async () => {
      if (id && typeof id === 'string') {
        const roadmapData = await getRoadmapById(id);
        setRoadmap(roadmapData);
      }
    };
    fetchRoadmap();
  }, [id]);

  const handleUpdate = async (roadmap: Roadmap) => {
    if (id && typeof id === 'string') {
      await updateRoadmap(id, roadmap);
      router.push('/roadmaps');
    }
  };

  if (!roadmap) {
    return <MainLayout>Carregando...</MainLayout>;
  }

  return (
    <MainLayout>
      <h1>Editar Roadmap</h1>
      <RoadmapForm
        initialValues={roadmap}
        onSubmit={handleUpdate}
      />
    </MainLayout>
  );
};

export default EditRoadmapPage;
