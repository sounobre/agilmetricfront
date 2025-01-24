import api from './api';
import { Roadmap } from '../types/Roadmap';

export const getAllRoadmaps = async () => {
  const response = await api.get('/roadmaps');
  return response.data;
};

export const getRoadmapById = async (id: string) => {
  const response = await api.get(`/roadmaps/${id}`);
  return response.data;
};

export const createRoadmap = async (roadmap: Roadmap) => {
  const response = await api.post('/roadmaps', roadmap);
  return response.data;
};

export const updateRoadmap = async (id: string, roadmap: Roadmap) => {
  const response = await api.put(`/roadmaps/${id}`, roadmap);
  return response.data;
};

export const deleteRoadmap = async (id: string) => {
  await api.delete(`/roadmaps/${id}`);
};
