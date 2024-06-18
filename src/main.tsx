import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home/App.tsx";
import "./index.css";
import Foot from "./components/Footer/Foot.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Foot />
    </BrowserRouter>
  </React.StrictMode>
);
