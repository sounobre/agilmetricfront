import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import Link from 'next/link';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            AgilMetric
          </Typography>
          <Link href="/users" style={{ textDecoration: 'none', color: 'white', marginRight: '10px' }}>
            Usuários
          </Link>
          <Link href="/roadmaps" style={{ textDecoration: 'none', color: 'white', marginRight: '10px' }}>
            Roadmaps
          </Link>
           <Link href="/tasks" style={{ textDecoration: 'none', color: 'white', marginRight: '10px' }}>
            Tarefas
          </Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        {children}
      </Container>
    </>
  );
};

export default MainLayout;
