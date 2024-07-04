import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importamos el modulo que permite que se lea el componente para los links
import {createBrowserRouter, RouterProvider} from "react-router-dom";
//importamos modulos
import Inicio from './componentes/Inicio/inicio';
import Cuerpo from './componentes/cuerpo';
import Usuarios from './componentes/usuarios/usuarios'
import CreateNew from './componentes/usuarios/createNew'
import Asistencia from './componentes/usuarios/asistencia';
import EditUser from './componentes/usuarios/editarUsuario'
import Login from './componentes/login/login';
import Notas from './componentes/usuarios/notas';
import EditarNotas from './componentes/usuarios/editarNota'
import EditarSesiones from './componentes/usuarios/editarSesiones';
import Sesiones from './componentes/usuarios/sesiones';


const router=createBrowserRouter(
  [
    {
      //Elemento LOGIN estara en esta dirección "/"
      path: "/",
      element: <Login/> //llamamos el componente
    },
    
    {
      path: "/inicio", //Ubicación del archivo o componente
      element: <Inicio/>
    },

    {
      path: "/cuerpo",
      element: <Cuerpo/>
    },

    {
      path: "/usuarios",
      element: <Usuarios/>
    },

    {
      path: "/create",
      element: <CreateNew/>
    },

    {
      path: "/asistencia",
      element: <Asistencia/>
    },

    {
      path: "/EditUser/:id",
      element: <EditUser/>
    },

    {
      path: "/notas",
      element: <Notas/>
    },

    {
      path: "/EditarNotas/:id",
      element: <EditarNotas/>
    },
    {
      path: "/EditarSesiones",
      element: <EditarSesiones/>
    },
    {
      path: "/Sesiones",
      element: <Sesiones/>
    },
  ]
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Usamos nuestra función router, tiene que estar integrada en RouterProvider */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
