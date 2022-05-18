import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContextProvider } from "./AppContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
