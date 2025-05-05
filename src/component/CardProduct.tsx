import { Favorite, FavoriteBorder } from "@mui/icons-material";
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

interface CardProductProps {
  product: Product;
  toggleFavorite: (productId: number) => void;
}

export function CardProduct({ product, toggleFavorite }: CardProductProps) {
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
          onClick={() => toggleFavorite(product.id)}
        >
          {product.isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
        </IconButton>
      </CardActions>
    </Card>
  );
}
