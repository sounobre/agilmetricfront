import api from './api';
import { Task } from '../types/Task';

export const getAllTasks = async () => {
  const response = await api.get('/tasks');
  return response.data;
};

export const getTaskById = async (id: string) => {
  const response = await api.get(`/tasks/${id}`);
  return response.data;
};

export const createTask = async (task: Task) => {
  const response = await api.post('/tasks', task);
  return response.data;
};

export const updateTask = async (id: string, task: Task) => {
  const response = await api.put(`/tasks/${id}`, task);
  return response.data;
};

export const deleteTask = async (id: string) => {
  await api.delete(`/tasks/${id}`);
};
