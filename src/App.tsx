import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRoutes } from "./routes/AppRoutes";
import { light } from "./themes/light";
import { useAppSelector } from "./store/hooks";
import { selectTheme } from "./store/modules/themeSlice";
import { dark } from "./themes/dark";

export function App() {
  const appTheme = useAppSelector(selectTheme);

  return (
    <ThemeProvider theme={appTheme.value === "light" ? light : dark}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
}
