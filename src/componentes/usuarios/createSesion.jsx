import React, { useEffect, useState } from "react";
import "./usuarios.css";

//Creamos el componente
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Banner from "../banner/banner";

import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { Link } from "react-router-dom";

import Footer from "../footer/footer";

//Apartado tailwind
import BotonInicio from "../Tailwind/botonInicio";
import BotonBootcamp from "../Tailwind/botonBootcamp";
import BotoneSec2 from "../Tailwind/botoneSec2";
import BotonSec3 from "../Tailwind/botonSec3";
import BotonAdmin from "../Tailwind/botonAdmin";

function CreateSesion() {
  //! ESTUIAR!!
  const [navbarhidestatus, changenavbarhidestatus] = useState(true);
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbarhidestatus) {
      navbar.classList.add("sm-hide");
    } else {
      navbar.classList.remove("sm-hide");
    }
  }, [navbarhidestatus]);
  return (
    <Container fluid>
      {/* xs={4} = Tamaño de la columna <Container fluid />ancho: 100% en todos los tamaños de ventana gráfica y dispositivo.*/}

      {/*Contenido total*/}
      <Row>
        {/*Parte iz Menú*/}
        <Col md={3} sm={0} id="navbar" className="">
          <Card style={{ width: "100%", height: "100%" }} className="text-left">
            <Card.Body>
              <ListGroup variant="flush">
                {/*Nombre e icono*/}
                <ListGroup.Item>
                  <Card.Title>
                    <BotonInicio />
                  </Card.Title>
                </ListGroup.Item>

                {/*Cuerpo menú Inicio(Eliminado), bootcamps*/}
                <ListGroup.Item>
                  <BotonBootcamp />
                </ListGroup.Item>

                {/*Cuerpo menú 3 parte*/}
                <ListGroup.Item>
                  <BotoneSec2 />
                </ListGroup.Item>

                {/*Cuerpo menú 4 parte*/}
                <ListGroup.Item>
                  <BotonSec3 />
                </ListGroup.Item>

                {/*Cuerpo menú 4 parte*/}
                <ListGroup.Item>
                  <BotonAdmin />
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/*Parte DER Menú*/}
        <Col class="col">
          {/*Banner y boton*/}
          <Col>
            <Banner />
            <br />

            {/**! ESTUIAR!! */}
            <Button
              onClick={() => changenavbarhidestatus(!navbarhidestatus)}
              className="lg-hide"
            >
              Navbar
            </Button>
          </Col>

          {/*FORMULARIO PARA GENERAR NUEVA SESIÓN*/}
          <Row>
            <Col>
              <div class="container-fluid py-4 border rounded-3">
                <h4>Crear nueva sesión</h4>
                <br />
                <form>
                  <input id="id" name="id" value="1" hidden />

                  <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-zip"
                      >
                        Número de sesión
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="NUMERO_SESION"
                        type="number"
                        name="NUMERO_SESION"
                        //value="{NUMERO_SESION}"
                        //onChange="{handleChange}"
                        placeholder="Ej. 1"
                        required
                        min="0"
                      />
                    </div>

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        fecha
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="FECHA"
                        type="date"
                        name="FECHA"
                        //value="{NUMERO_SESION}"
                        //onChange="{handleChange}"
                        placeholder="Ej. 27/06/2024"
                        required
                      />
                    </div>

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Componente
                      </label>
                      <div class="relative">
                        <select
                          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="COMPONENTE"

                          //Estos valores (1, 2 y 3) son los que se enviarán al servidor cuando el usuario seleccione una opción y se envíe el formulario,
                          //por lo que puedes usarlos para procesar la entrada de manera consistente en tu backend :3.
                        >
                          <option value="" disabled>
                            Seleccione el componente
                          </option>
                          <option value="Ingles">Inglés</option>
                          <option value="Tecnico">Técnico</option>
                          <option value="Power_Skills">Power Skills</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Horario
                      </label>
                      <div class="relative">
                        <select
                          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="HORARIO"
                          //Estos valores (1, 2 y 3) son los que se enviarán al servidor cuando el usuario seleccione una opción y se envíe el formulario,
                          //por lo que puedes usarlos para procesar la entrada de manera consistente en tu backend :3.
                        >
                          <option value="" disabled>
                            Seleccione el horario
                          </option>
                          <option value="Diurno">Diurno</option>
                          <option value="Nocturno">Nocturno</option>
                        </select>
                      </div>
                    </div>

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-zip"
                      >
                        Estado
                      </label>
                      <div class="relative">
                        <select
                          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="ESTADO"
                          //Estos valores (1, 2 y 3) son los que se enviarán al servidor cuando el usuario seleccione una opción y se envíe el formulario,
                          //por lo que puedes usarlos para procesar la entrada de manera consistente en tu backend :3.
                        >
                          <option value="0">Inactivo</option>
                          <option value="1">Activo</option>
                        </select>
                      </div>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Curso
                      </label>
                      <select
                        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="CURSO"
                        //Estos valores (1, 2 y 3) son los que se enviarán al servidor cuando el usuario seleccione una opción y se envíe el formulario,
                        //por lo que puedes usarlos para procesar la entrada de manera consistente en tu backend :3.
                      >
                        <option value="" disabled>
                          Seleccione el programa
                        </option>
                        <option value="Desarrollo Full Stack">
                          Desarrollo Web Full Stack
                        </option>
                        <option value="Ciberseguridad">Blockchain</option>
                        <option value="Inteligencia Artificial">
                          Arquitectura en la Nube
                        </option>
                        <option value="Inteligencia Artificial">
                          Análisis y visualizacion de Datos
                        </option>
                        <option value="Inteligencia Artificial">
                          Inteligencia Artificial
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-zip"
                      >
                        Nivel
                      </label>
                      <div class="relative">
                        <select
                          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="NIVEL"
                          //Estos valores (1, 2 y 3) son los que se enviarán al servidor cuando el usuario seleccione una opción y se envíe el formulario,
                          //por lo que puedes usarlos para procesar la entrada de manera consistente en tu backend :3.
                        >
                          <option value="" disabled>
                            Seleccione el nivel
                          </option>
                          <option value="BASICO">Básico</option>
                          <option value="INTERMEDIO">Intermedio</option>
                          <option value="AVANZADO">Avanzado</option>
                        </select>
                      </div>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        LINK
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="LINK"
                        type="text"
                        name="LINK"
                        //value="{NUMERO_SESION}"
                        //onChange="{handleChange}"
                        placeholder="Ej. https/..."
                        required
                      />
                    </div>
                  </div>
                  <div class="inline-flex mt-4 mx-2">
                    <Link
                      type="button"
                      className="bg-blue-700 text-white font-regular py-2 px-3  rounded hover:scale-95 justify-center no-underline mx-2"
                      to={"/"}
                    >
                      Subir
                    </Link>
                    <Link
                      type="button"
                      className="btn btn-outline-danger font-regular py-2 px-3   rounded hover:scale-95 no-underline"
                      to={"/Sesiones"}
                    >
                      Volver
                    </Link>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/*Parte Pie de Pagina*/}
      <Row>
        <Col>
          <Footer></Footer>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateSesion;
