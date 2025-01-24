import React, { useState, useEffect } from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import UserForm from '../../components/forms/UserForm';
import { getUserById, updateUser } from '../../services/userService';
import { useRouter } from 'next/router';
import { User } from '../../types/User';

const EditUserPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (id && typeof id === 'string') {
        const userData = await getUserById(id);
        setUser(userData);
      }
    };
    fetchUser();
  }, [id]);

  const handleUpdate = async (user: User) => {
    if (id && typeof id === 'string') {
      await updateUser(id, user);
      router.push('/users');
    }
  };

  if (!user) {
    return <MainLayout>Carregando...</MainLayout>;
  }

  return (
    <MainLayout>
      <h1>Editar Usuário</h1>
      <UserForm
        initialValues={user}
        onSubmit={handleUpdate}
      />
    </MainLayout>
  );
};

export default EditUserPage;
