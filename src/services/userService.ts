import api from './api';
import { User } from '../types/User';

export const getAllUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const getUserById = async (id: string) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const createUser = async (user: User) => {
  const response = await api.post('/users', user);
  return response.data;
};

export const updateUser = async (id: string, user: User) => {
  const response = await api.put(`/users/${id}`, user);
  return response.data;
};

export const deleteUser = async (id: string) => {
  await api.delete(`/users/${id}`);
};
