import React from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import TaskForm from '../../components/forms/TaskForm';
import { createTask } from '../../services/taskService';
import { useRouter } from 'next/router';
import { Task } from '../../types/Task';

const CreateTaskPage: React.FC = () => {
  const router = useRouter();

  const handleCreate = async (task: Task) => {
    await createTask(task);
    router.push('/tasks');
  };

  return (
    <MainLayout>
      <h1>Cadastrar Tarefa</h1>
      <TaskForm
        initialValues={{ name: '', estimatedHours: 0, developerId: '', roadmapId: '', dependencyId: '' }}
        onSubmit={handleCreate}
      />
    </MainLayout>
  );
};

export default CreateTaskPage;
