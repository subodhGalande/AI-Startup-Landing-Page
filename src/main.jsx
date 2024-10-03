import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { ReactLenis } from "lenis/react";

createRoot(document.getElementById("root")).render(
  <ReactLenis root>
    <StrictMode>
      <App />
    </StrictMode>
  </ReactLenis>,
);
