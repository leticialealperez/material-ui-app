import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRoutes } from "./routes/AppRoutes";
import { light } from "./themes/light";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

export function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={light}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </ReduxProvider>
  );
}
