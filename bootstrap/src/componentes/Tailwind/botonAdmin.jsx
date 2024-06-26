import React from "react";
import { Link } from "react-router-dom";

export default function BotonAdmin() {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col justify-center text-center items-center ">
          <span
            class="material-symbols-outlined"
            style={{ color: "#063970", fontSize: "25px" }}
          >
            admin_panel_settings
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <Link
            type="button"
            className="btn btn-outline-none font-semibold"
            to={"/usuarios"}
          >
            Administrar Usuarios
          </Link>
        </div>
      </div>
      <div class="inline-flex mt-2">
        <div className="flex flex-col justify-center text-center items-center ">
          <span
            class="material-symbols-outlined"
            style={{ color: "#063970", fontSize: "25px" }}
          >
            history_edu
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <Link
            type="button"
            className="btn btn-outline-none font-semibold"
            to={"/notas"}
          >
            Calificaciones
          </Link>
        </div>
      </div>

      <br />
      <div class="inline-flex mt-9">
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
