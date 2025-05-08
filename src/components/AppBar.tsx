import { Logout, LocalGroceryStore as CartIcon } from "@mui/icons-material";
import {
  AppBar as AppBarMUI,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectProducts } from "../store/modules/productsSlice";
import { logout } from "../store/modules/userLoggedSlice";

export function AppBar() {
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  return (
    <AppBarMUI position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Growdev
        </Typography>

        <Box sx={{ mr: 4 }}>
          <Badge
            badgeContent={products.filter((p) => p.isFavorite).length}
            color="error"
          >
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              <CartIcon />
            </IconButton>
          </Badge>
        </Box>

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => dispatch(logout())}
        >
          <Logout />
        </IconButton>
      </Toolbar>
    </AppBarMUI>
  );
}
