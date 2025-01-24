export type Task = {
  id?: string;
  name: string;
  estimatedHours: number;
  developerId: string;
  roadmapId: string;
  dependencyId?: string;
};
