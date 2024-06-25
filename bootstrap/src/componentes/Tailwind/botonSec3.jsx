import React from "react";
import { Link } from "react-router-dom";

export default function BotonSec3() {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col justify-center text-center items-center ">
          <span
            class="material-symbols-outlined"
            style={{ color: "#063970", fontSize: "25px" }}
          >
            book_2
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <button className="bg-transparent text-dark font-regular py-2 px-3  rounded">
            Manual de usuario
          </button>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col justify-center text-center items-center ">
          <span
            class="material-symbols-outlined"
            style={{ color: "#063970", fontSize: "25px" }}
          >
            contact_support
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <button className="bg-transparent text-dark font-regular py-2 px-3  rounded">
            Preguntas frecuentes
          </button>
        </div>
      </div>

      <br />
      <br />

      <div class="inline-flex">
          <Link
            type="button"
            className="bg-cyan-500 text-white font-regular py-2 px-3  rounded hover:scale-95 justify-center no-underline mx-2"
            to={"/usuarios"}
          >
            Usuarios
          </Link>
          <Link
            type="button"
            className="bg-red-700 text-white font-regular py-2 px-3  rounded hover:scale-95 no-underline"
            to={"/"}
          >
            Cerrar Sesión
          </Link>
      </div>
    </>
  );
}
