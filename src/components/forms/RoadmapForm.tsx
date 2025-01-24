import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../ui/TextField";
import Button from "../ui/Button";
import Select from "../ui/SelectField";
import { getAllUsers } from "../../services/userService";
import { User } from "../../types/User";
import { Roadmap } from "../../types/Roadmap";

type RoadmapFormProps = {
  initialValues: Roadmap;
  onSubmit: (values: Roadmap) => void;
};

const RoadmapForm: React.FC<RoadmapFormProps> = ({
  initialValues,
  onSubmit,
}) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getAllUsers();
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  const validationSchema = Yup.object({
    title: Yup.string().required("O título é obrigatório"),
    description: Yup.string().required("A descrição é obrigatória"),
    teamIds: Yup.array()
      .of(Yup.string())
      .min(1, "Selecione pelo menos um desenvolvedor")
      .required("O time é obrigatório"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <TextField name="title" label="Título" fullWidth margin="normal" />
          <TextField
            name="description"
            label="Descrição"
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <Select
            name="teamIds"
            label="Desenvolvedores"
            fullWidth
            multiple
            options={users.map((user) => ({
              value: user.id || "",
              label: user.name,
            }))}
            onChange={(e) => {
              const selectedValues = Array.isArray(e)
                ? e.map((item) => item.value)
                : [e.target.value];
              setFieldValue("teamIds", selectedValues);
            }}
            value={values.teamIds}
          />
          <Button type="submit" variant="contained" color="primary">
            Salvar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RoadmapForm;
