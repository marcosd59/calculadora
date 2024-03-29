import React from "react";
import "../stylesheets/Boton.css";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <button
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : null
      }`.trim()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </button>
  );
}

export default Boton;
