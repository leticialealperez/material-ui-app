import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { StrictMode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { persistedStore, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={<h1>Carregando...</h1>} persistor={persistedStore}>
        <App />
      </PersistGate>
    </ReduxProvider>
  </StrictMode>
);
