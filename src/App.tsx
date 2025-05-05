import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRoutes } from "./routes/AppRoutes";
import { light } from "./themes/light";

export function App() {
  return (
    <ThemeProvider theme={light}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
}
