import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "animate.css/animate.min.css";
import { ScormProvider } from "@code-by-dwayne/react-scorm-provider";
import { MemoryRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <ScormProvider>
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </ScormProvider>
);
