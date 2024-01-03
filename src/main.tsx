import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MouseProvider } from "./contexts/MouseProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MouseProvider>
      <App />
    </MouseProvider>
  </React.StrictMode>
);
