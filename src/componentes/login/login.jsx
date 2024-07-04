

import React, { useState } from "react";
import "./login.css";
import Fondo from "../../img/fondo1.jpg";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Login() {
  const navigate = useNavigate();

  // Estados para almacenar el EMAIL y la contraseña
  const [EMAIL, setEMAIL] = useState("");
  const [CONTRASENA, setCONTRASENA] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar si el usuario está logueado



// Función para manejar el envío del formulario
const handleSubmit = async (event) => {
  event.preventDefault(); // Previene el comportamiento predeterminado del formulario

  try {
    // Envía una solicitud POST al backend para autenticar al usuario
    const url = "http://localhost:3001/api/login";

    const response = await axios.post(url, {
      EMAIL,
      CONTRASENA,
    });

     
     // Verifica la respuesta del backend
     if (response.status === 200) {
      const { Id_Usuario, EMAIL, Nombres, Tipo_Rol } = response.data.data;

      // Almacenar los datos en sessionStorage
      sessionStorage.setItem("Id_Usuario", Id_Usuario);
      sessionStorage.setItem("EMAIL", EMAIL);
      sessionStorage.setItem("Nombres", Nombres);
      sessionStorage.setItem("Tipo_Rol", Tipo_Rol);
      

      // Si el inicio de sesión es exitoso, actualiza el estado para ocultar el componente Login
      setIsLoggedIn(true);
      // Redirige al usuario
      navigate("/inicio");
    } else {
      // Si el backend devuelve un estado diferente, muestra un mensaje de error
      alert("El usuario o la contraseña son incorrectos");
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    // alert("Error al iniciar sesión. Por favor, intenta nuevamente.");
    alert("El usuario o la contraseña son incorrectos");
  }
};

if (isLoggedIn) {
  return null; // No renderiza nada si el usuario está logueado
}



  const cancelForm = () => {
    setEMAIL("");
    setCONTRASENA("");
  };

  return (
    <div className="containerLogin">
      <div className="row justify-content-center pt-5 mt-5 m-1">
        <div className="col-md-6 col-sm-8 col-xl-4 col-lg-5 formulario">
          <form 
          onSubmit={handleSubmit}
          >
            <div className="form-group text-center text-white pt-5">
              <h1>Iniciar Sesión</h1>
            </div>

            <div className="form-group mx-sm-4 pt-4">
              <input
                type="text"
                name="EMAIL"
                className="form-control"
                placeholder="Ingrese su Ususario"
                value={EMAIL}
                onChange={(e) => setEMAIL(e.target.value)}
              />
            </div>

            <div className="form-group mx-sm-4 pb-4">
              <input
                type="password"
                name="CONTRASENA"
                className="form-control"
                placeholder="Ingrese su Contraseña"
                value={CONTRASENA}
                onChange={(e) => setCONTRASENA(e.target.value)}
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
                // onClick={handleLogin}
                className="bg-gray-500 text-white font-regular py-2 px-3 rounded hover:scale-95 no-underline ingresar"
              >
                Ingresar 
              </button>
            </div>

            <div className="form-group mx-sm-4 text-center">
              <span>
                {/* este es boton olvidar contraseña  */}
                 {/* <button className="olvide text-white btn btn-link" onClick={forgotCONTRASENA}>
                  Olvidé mi Contraseña
                </button> */}
              </span>
            </div> 

            <div className="form-group text-center pb-4">
              <span>
                {/* este es boton cancelar; borra datos escritos en los campos a llenar */}
                <button
                  onClick={cancelForm}  // Corregido para llamar a cancelForm en lugar de handleLogin
                  className="olvide1 cancelar"
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























