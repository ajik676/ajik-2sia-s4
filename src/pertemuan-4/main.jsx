import React from "react";
import { createRoot } from "react-dom/client";
import "./tailwind.css";
import ResponsiveDesign from "./ResponsiveDesign"; // Import komponen baru

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResponsiveDesign />
  </React.StrictMode>
);