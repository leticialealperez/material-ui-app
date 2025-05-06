import { Box, Container, Fab, Typography } from "@mui/material";
import { AppBar } from "../component/AppBar";
import { useState } from "react";
import { Add } from "@mui/icons-material";
import { Modal } from "../component/Modal";
import { ProductsList } from "../component/ProductsList";

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleToggleModal() {
    setIsModalOpen((currentValue) => !currentValue);
  }

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
