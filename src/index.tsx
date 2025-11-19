import React from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "./router";
import "../tailwind.css"; // Importa o Tailwind CSS

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);
