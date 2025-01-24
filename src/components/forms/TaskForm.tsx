import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../ui/TextField";
import Button from "../ui/Button";
import Select from "../ui/SelectField";
import { getAllUsers } from "../../services/userService";
import { getAllRoadmaps } from "../../services/roadmapService";
import { User } from "../../types/User";
import { Roadmap } from "../../types/Roadmap";
import { Task } from "../../types/Task";

type TaskFormProps = {
  initialValues: Task;
  onSubmit: (values: Task) => void;
};

const TaskForm: React.FC<TaskFormProps> = ({ initialValues, onSubmit }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getAllUsers();
      setUsers(usersData);
    };
    const fetchRoadmaps = async () => {
      const roadmapsData = await getAllRoadmaps();
      setRoadmaps(roadmapsData);
    };
    fetchUsers();
    fetchRoadmaps();
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().required("O nome da tarefa é obrigatório"),
    estimatedHours: Yup.number()
      .required("Horas estimadas são obrigatórias")
      .positive("As horas estimadas devem ser positivas")
      .integer("As horas estimadas devem ser um número inteiro"),
    developerId: Yup.string().required("O desenvolvedor é obrigatório"),
    roadmapId: Yup.string().required("O roadmap é obrigatório"),
    dependencyId: Yup.string(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <TextField
          name="name"
          label="Nome da Tarefa"
          fullWidth
          margin="normal"
        />
        <TextField
          name="estimatedHours"
          label="Horas Estimadas"
          fullWidth
          margin="normal"
          type="number"
        />
        <Select
          name="developerId"
          label="Desenvolvedor"
          fullWidth
          options={users.map((user) => ({
            value: user.id || "",
            label: user.name,
          }))}
        />
        <Select
          name="roadmapId"
          label="Roadmap"
          fullWidth
          options={roadmaps.map((roadmap) => ({
            value: roadmap.id || "",
            label: roadmap.title,
          }))}
        />
        <Select
          name="dependencyId"
          label="Tarefa Dependente (Opcional)"
          fullWidth
          options={[]}
          disabled
        />
        <Button type="submit" variant="contained" color="primary">
          Salvar
        </Button>
      </Form>
    </Formik>
  );
};

export default TaskForm;
