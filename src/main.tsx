import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/shared/styles/global.css";
import App from "@/App.tsx";

const root = createRoot(document.getElementById("root") as Element);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
