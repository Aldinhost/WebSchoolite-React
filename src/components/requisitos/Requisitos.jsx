import React from "react";

const Requisitos = ({ children }) => {
  return (
    <>
      <h3>Requisitos de Admisión</h3>
      <div className="preescolar__requisitos-container">
        <div className="preescolar__requisitos-space"></div>
        {children}
      </div>
    </>
  );
};

export default Requisitos;
