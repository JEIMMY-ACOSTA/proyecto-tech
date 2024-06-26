import React from "react";
import "./login.css";
import Fondo from "../../img/fondo1.jpg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="containerLogin">
      <div className="row justify-content-center pt5 mt-5 m-1">
        <div className="col-md-6 col-sm-8 col-xl-4 col-lg-5 formulario">
          <form action="">
            <div className="form-group text-center text-white pt-5">
              <h1>Iniciar Sesión</h1>
            </div>

            <div className="form-group mx-sm-4 pt-4">
              <input
                type="text"
                name="usuario"
                className="form-control"
                placeholder="Ingrese su Usuario"
              />
            </div>

            <div className="form-group mx-sm-4 pb-4">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Ingrese su Contraseña"
              />
            </div>

            <div className="form-group mx-sm-4 pb-4 opacity-3">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle form-control"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tipo de Rol
                </button>
                <ul className="dropdown-menu form-control">
                  <li>
                    <a className="dropdown-item" href="#">
                      Administrador
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Docente
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Estudiante
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="form-group mx-sm-4 pb-2">
              <Link
                type="button"
                className="bg-gray-500 text-white font-regular py-2 px-3  rounded hover:scale-95 no-underline"
                to={"/inicio"}
              >
                Ingresar
              </Link>
            </div>

            <div className="form-group mx-sm-4 text-center ">
              <span className="">
                <a href="#" className="olvide text-white">
                  Olvide mi Contraseña
                </a>
              </span>
            </div>

            <div className="form-group text-center pb-4">
              <span>
                <a href="#" className="olvide1 text-white">
                  Registrarse
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
      <img
        src={Fondo}
        alt=""
        className="w-full h-full object-cover -z-50 fixed top-0"
      />
    </div>
  );
}

export default Login;
