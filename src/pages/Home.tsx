import { Box, Container, Fab, Typography } from "@mui/material";
import { AppBar } from "../components/AppBar";
import { useEffect, useState } from "react";
import { Add } from "@mui/icons-material";
import { Modal } from "../components/Modal";
import { ProductsList } from "../components/ProductsList";
import { useAppSelector } from "../store/hooks";
import { selectUserLogged } from "../store/modules/userLoggedSlice";
import { useNavigate } from "react-router";

export function Home() {
  const userLogged = useAppSelector(selectUserLogged);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (userLogged.id === 0) {
      // já NÃO tem um usuario logado, navega até a página de login
      navigate("/sign-in");
    }
  }, [navigate, userLogged]);

  function handleToggleModal() {
    setIsModalOpen((currentValue) => !currentValue);
  }

  if (userLogged.id === 0) return;

  return (
    <>
      <AppBar />
      <Container maxWidth="lg" sx={{ paddingY: 5 }}>
        <Box component="header" marginY={5}>
          <Typography variant="h2" component="h1" textAlign="center">
            E-commerce
          </Typography>
        </Box>

        <ProductsList />
      </Container>

      <Fab
        size="large"
        color="secondary"
        aria-label="add"
        sx={{ position: "fixed", right: 40, bottom: 40 }}
        onClick={handleToggleModal}
      >
        <Add />
      </Fab>

      <Modal isModalOpen={isModalOpen} handleToggleModal={handleToggleModal} />
    </>
  );
}
