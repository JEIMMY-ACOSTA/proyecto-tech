

import React, { useState } from "react";
import "./login.css";
import Fondo from "../../img/fondo1.jpg";
import { useNavigate } from "react-router-dom";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validador para  que los campos no estén vacíos
    if (!usuario || !password) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Validador de las credenciales de ingreso contraseña y usuario
    if (usuario === "talento@talentotech.com" && password === "123456789") {
      navigate("/inicio");  // Navegar a la página de inicio
    } else {
      alert("Parece que los datos ingresados no son válidos. Por favor, inténtelo de nuevo.");
    }
  };

  const forgotPassword = () => {
    alert("Enviaremos un link para definir una nueva contraseña.");
  };

  const cancelForm = () => {
    setUsuario("");
    setPassword("");
  };

  return (
    <div className="containerLogin">
      <div className="row justify-content-center pt-5 mt-5 m-1">
        <div className="col-md-6 col-sm-8 col-xl-4 col-lg-5 formulario">
          <form onSubmit={handleLogin}>
            <div className="form-group text-center text-white pt-5">
              <h1>Iniciar Sesión</h1>
            </div>

            <div className="form-group mx-sm-4 pt-4">
              <input
                type="text"
                name="usuario"
                className="form-control"
                placeholder="Ingrese su Usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>

            <div className="form-group mx-sm-4 pb-4">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Ingrese su Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

                  {/* desplegable de tipo rol: estudiante, docente y administrador */}
                </button>
                <ul className="dropdown-menu form-control">
                  <li>
                    <button className="dropdown-item">Administrador</button>
                  </li>
                  <li>
                    <button className="dropdown-item">Docente</button>
                  </li>
                  <li>
                    <button className="dropdown-item">Estudiante</button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="form-group mx-sm-4 pb-2">
              {/* este es boton iniciar sesion */}
              <button
                type="submit"
                className="bg-gray-500 text-white font-regular py-2 px-3 rounded hover:scale-95 no-underline ingresar"
              >
                Ingresar
              </button>
            </div>

            <div className="form-group mx-sm-4 text-center">
              <span>
              {/* este es boton olvidar contraseña */}
                <button className="olvide text-white btn btn-link" onClick={forgotPassword}>
                  Olvidé mi Contraseña
                </button>
              </span>
            </div>

            <div className="form-group text-center pb-4">
              <span>
              {/* este es boton cancelar; borra datos escritos en los campos a llenar */}
                <button
                  type="button"
                  className="olvide1 cancelar"
                  onClick={cancelForm}
                >
                  Cancelar
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
      {/* esta es la imagen de fondo de la pagina login */}
      <img
        src={Fondo}
        alt="imagen de talentotech azul con ciadrados y puntos verdes"
        className="w-full h-full object-cover -z-50 fixed top-0"
      />
    </div>
  );
}

export default Login;























