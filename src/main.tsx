import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home/App.tsx";
import "./index.css";
import Foot from "./components/Footer/Foot.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Foot />
  </React.StrictMode>
);
