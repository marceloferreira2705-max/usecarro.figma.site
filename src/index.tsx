import React from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "./router";
import { ErrorBoundary } from "./components/ErrorBoundary";
import "../tailwind.css"; // Importa o Tailwind CSS

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  </React.StrictMode>,
);
