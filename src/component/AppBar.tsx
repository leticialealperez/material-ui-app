import { Menu, LocalGroceryStore as CartIcon } from "@mui/icons-material";
import {
  AppBar as AppBarMUI,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

export function AppBar() {
  return (
    <AppBarMUI position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Growdev
        </Typography>

        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <CartIcon />
        </IconButton>
      </Toolbar>
    </AppBarMUI>
  );
}
