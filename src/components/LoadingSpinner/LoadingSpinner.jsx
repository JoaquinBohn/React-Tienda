import React from "react";
import { PulseLoader } from "react-spinners";
import "./LoadingSpinner.css";

export const LoadingSpinner = () => {
  return (
    <div className="cargando">
      <PulseLoader color="#8636d6" />
    </div>
  );
};
