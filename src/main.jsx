import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import App from "./App.jsx";
import "./index.css";
import { ReactLenis } from "lenis/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
