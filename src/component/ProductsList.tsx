import { Grid, Typography } from "@mui/material";
import { CardProduct } from "./CardProduct";
import { useAppSelector } from "../store/hooks";
import { selectProducts } from "../store/modules/productsSlice";

export function ProductsList() {
  const products = useAppSelector(selectProducts);

  return (
    <Grid container spacing={2}>
      {!products.length ? (
        <Grid size={12}>
          <Typography textAlign="center">
            Nenhum produto cadastrado ainda ☹️
          </Typography>
        </Grid>
      ) : (
        products.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}>
            <CardProduct product={product} />
          </Grid>
        ))
      )}
    </Grid>
  );
}
