import React from "react";
import { Container, Typography } from "@mui/material";
import Menu from "../components/layouts/Menu";

const HomePage: React.FC = () => {
  return (
    <>
      <Menu />
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom>
          Bem-vindo ao AgilMetric!
        </Typography>
        <Typography variant="body1">
          Este é o painel inicial do seu sistema de gestão de tarefas e
          roadmaps.
        </Typography>
        {/* Adicione aqui os componentes e funcionalidades da sua página inicial */}
      </Container>
    </>
  );
};

export default HomePage;
