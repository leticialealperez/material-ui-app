import { Delete, Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { Product } from "../interfaces/product";
import { useAppDispatch } from "../store/hooks";
import { togglefavorite, remove } from "../store/modules/productsSlice";

interface CardProductProps {
  product: Product;
}

export function CardProduct({ product }: CardProductProps) {
  const dispatch = useAppDispatch();

  return (
    <Card>
      <CardMedia
        sx={{ height: 180 }}
        image={product.imgUrl}
        title={product.title}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>

        <Tooltip title={product.description}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {product.description.slice(0, 150).concat("...")}
          </Typography>
        </Tooltip>
      </CardContent>

      <CardActions>
        <IconButton
          aria-label="add to favorites"
          onClick={() => dispatch(togglefavorite(product.id))}
        >
          {product.isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
        </IconButton>

        <IconButton
          aria-label="remove product"
          onClick={() => dispatch(remove(product.id))}
        >
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
}
