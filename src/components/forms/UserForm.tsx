import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '../ui/TextField';
import Button from '../ui/Button';
import { User } from '../../types/User';

type UserFormProps = {
  initialValues: User;
  onSubmit: (values: User) => void;
};

const UserForm: React.FC<UserFormProps> = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string().email('Email inválido').required('O email é obrigatório'),
    position: Yup.string().required('A posição é obrigatória'),
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
          label="Nome"
          fullWidth
          margin="normal"
        />
        <TextField
          name="email"
          label="Email"
          fullWidth
          margin="normal"
        />
        <TextField
          name="position"
          label="Posição"
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Salvar
        </Button>
      </Form>
    </Formik>
  );
};

export default UserForm;
