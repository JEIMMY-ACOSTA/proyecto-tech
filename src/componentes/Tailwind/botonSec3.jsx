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
          <a
            type="button"
            className="btn btn-outline-none font-semibold"
            href="https://drive.google.com/file/d/1y0AOTRynaF8NUZV8iP5bUKeDBaVAufdJ/view"
            target="_blank"
          >
            Manual de usuario
          </a>
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
          <Link
            type="button"
            className="btn btn-outline-none font-semibold"
            to={"/PgProgreso"}
          >
            Preguntas frecuentes
          </Link>
        </div>
      </div>

    </>
  );
}
