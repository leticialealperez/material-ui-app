import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { NewProduct } from "../interfaces/product";
import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { add } from "../store/modules/productsSlice";

interface ModalProps {
  isModalOpen: boolean;
  handleToggleModal: () => void;
}

export function Modal({ isModalOpen, handleToggleModal }: ModalProps) {
  const [form, setForm] = useState<NewProduct>({
    title: "",
    imgUrl: "",
    description: "",
  });

  const dispatch = useAppDispatch();

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((currentValue) => ({
      ...currentValue,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSave() {
    if (!form.imgUrl) {
      alert("Informe a imagem do produto");
      return;
    }

    if (!form.title) {
      alert("Informe o nome do produto");
      return;
    }

    dispatch(add(form));
    resetForm();
    handleToggleModal();
  }

  function resetForm() {
    setForm({
      title: "",
      imgUrl: "",
      description: "",
    });
  }

  return (
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
        <Button onClick={handleSave} autoFocus>
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
