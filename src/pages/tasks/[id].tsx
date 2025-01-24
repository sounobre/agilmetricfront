import React, { useState, useEffect } from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import TaskForm from '../../components/forms/TaskForm';
import { getTaskById, updateTask } from '../../services/taskService';
import { useRouter } from 'next/router';
import { Task } from '../../types/Task';

const EditTaskPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    const fetchTask = async () => {
      if (id && typeof id === 'string') {
        const taskData = await getTaskById(id);
        setTask(taskData);
      }
    };
    fetchTask();
  }, [id]);

  const handleUpdate = async (task: Task) => {
    if (id && typeof id === 'string') {
      await updateTask(id, task);
      router.push('/tasks');
    }
  };

  if (!task) {
    return <MainLayout>Carregando...</MainLayout>;
  }

  return (
    <MainLayout>
      <h1>Editar Tarefa</h1>
      <TaskForm
        initialValues={task}
        onSubmit={handleUpdate}
      />
    </MainLayout>
  );
};

export default EditTaskPage;
