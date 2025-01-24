import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const Menu: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AgilMetric
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} href="/users">
            Usuários
          </Button>
          <Button color="inherit" component={Link} href="/roadmaps">
            Roadmaps
          </Button>
          <Button color="inherit" component={Link} href="/tasks">
            Tarefas
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
