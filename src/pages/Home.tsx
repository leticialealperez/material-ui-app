import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { AppBar } from "../component/AppBar";
import Grid from "@mui/material/Grid";
import { CardProduct } from "../component/CardProduct";
import { useState } from "react";
import { Product } from "../interfaces/product";
import { Add } from "@mui/icons-material";

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState<Product>({
    id: 0,
    title: "",
    imgUrl: "",
    description: "",
    isFavorite: false,
  });

  function handleToggleModal() {
    setIsModalOpen((currentValue) => !currentValue);
  }

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((currentValue) => ({
      ...currentValue,
      [event.target.name]: event.target.value,
    }));
  }

  function handleAddProduct() {
    const newProduct = {
      ...form,
      id: new Date().getTime(),
    };

    setProducts((currentValue) => [newProduct, ...currentValue]);
    resetForm();
    handleToggleModal();
  }

  function resetForm() {
    setForm({
      id: 0,
      title: "",
      imgUrl: "",
      description: "",
      isFavorite: false,
    });
  }

  function handleToggleFavorite(productId: number) {
    setProducts((currentValue) =>
      currentValue.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            isFavorite: !product.isFavorite,
          };
        }
        return product;
      })
    );
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

        <Grid container spacing={2}>
          {!products.length ? (
            <Grid size={12}>
              <Typography textAlign="center">
                Nenhum produto cadastrado ainda ☹️
              </Typography>
            </Grid>
          ) : (
            products.map((product) => (
              <Grid
                key={product.id}
                size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}
              >
                <CardProduct
                  product={product}
                  toggleFavorite={handleToggleFavorite}
                />
              </Grid>
            ))
          )}
        </Grid>
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

      <Dialog
        open={isModalOpen}
        onClose={handleToggleModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Cadastrar produto</DialogTitle>

        <DialogContent>
          <Stack component="form" spacing={2} width={500} paddingY={4}>
            <TextField
              label="Url da imagem"
              variant="outlined"
              name="imgUrl"
              fullWidth
              value={form.imgUrl}
              onChange={handleInputChange}
            />

            <TextField
              label="Nome do produto"
              variant="outlined"
              name="title"
              fullWidth
              value={form.title}
              onChange={handleInputChange}
            />

            <TextField
              label="Descrição do produto"
              variant="outlined"
              name="description"
              fullWidth
              value={form.description}
              onChange={handleInputChange}
            />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleToggleModal}>Cancelar</Button>
          <Button onClick={handleAddProduct} autoFocus>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
