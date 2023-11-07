import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
//Archivo de punto de entrada. Primer archivo que será detectado

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
