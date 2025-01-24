import React from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import UserForm from '../../components/forms/UserForm';
import { createUser } from '../../services/userService';
import { useRouter } from 'next/router';
import { User } from '../../types/User';

const CreateUserPage: React.FC = () => {
  const router = useRouter();

  const handleCreate = async (user: User) => {
    await createUser(user);
    router.push('/users');
  };

  return (
    <MainLayout>
      <h1>Cadastrar Usuário</h1>
      <UserForm
        initialValues={{ name: '', email: '', position: '' }}
        onSubmit={handleCreate}
      />
    </MainLayout>
  );
};

export default CreateUserPage;
