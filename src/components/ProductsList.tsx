import { Grid, Typography } from "@mui/material";
import { CardProduct } from "./CardProduct";
import { useAppSelector } from "../store/hooks";
import { selectProducts } from "../store/modules/productsSlice";
import { selectUserLogged } from "../store/modules/userLoggedSlice";

export function ProductsList() {
  const userLogged = useAppSelector(selectUserLogged);
  const products = useAppSelector(selectProducts);

  const productsUserLogged = products.filter(
    (product) => product.userId === userLogged.id
  );

  return (
    <Grid container spacing={2}>
      {!productsUserLogged.length ? (
        <Grid size={12}>
          <Typography textAlign="center">
            Nenhum produto cadastrado ainda ☹️
          </Typography>
        </Grid>
      ) : (
        productsUserLogged.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}>
            <CardProduct product={product} />
          </Grid>
        ))
      )}
    </Grid>
  );
}
