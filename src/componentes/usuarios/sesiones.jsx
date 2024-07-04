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

function Sesiones() {

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

                {/*Cuerpo ADMIN*/}
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

          {/*Contenido sesiones Y botones material de clase..*/}
          <Row>
            {/*Verificación y edición de usuarios*/}
            <Col class="fluid">
              <div class="container-xl">
                <div class=" mb-4">
                  <h4>Sesiones sincrónicas</h4>
                  <Link
                    type="button"
                    className="btn btn-primary font-regular py-2  rounded hover:scale-95"
                    to={"/CreateSesion"}
                  >
                    Crear nueva sesión
                  </Link>
                </div>
                <table class="table table-light table-hover table-bordered">
                  <thead>
                    <tr class="table-primary">
                      <th scope="col">ID</th>
                      <th scope="col">Número de sesiones</th>
                      <th scope="col">Fecha</th>
                      <th scope="col">Componente</th>
                      <th scope="col">Horario</th>
                      <th scope="col">Estado</th>
                      <th scope="col">Curso</th>
                      <th scope="col">Nivel</th>
                      <th scope="col">Link</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>1</td>
                      <td>27/06/2024</td>
                      <td>Componente Tecnico </td>
                      <td>Diurno</td>
                      <td>Activo</td>
                      <td>Desarrollo full stack</td>
                      <td>Intermedio</td>
                      <td>
                        <Link
                            type="button"
                            className="btn btn-outline-primary font-regular py-2 px-3  rounded hover:scale-95 justify-center no-underline mx-2"
                            to={"/"}
                          >
                            Link
                          </Link>
                      </td>
                      <td>
                        <div class="inline-flex">
                          <Link
                            type="button"
                            className="btn btn-outline-primary font-regular py-2 px-3  rounded hover:scale-95 justify-center no-underline mx-2"
                            to={"/EditarSesiones"}
                          >
                            Editar
                          </Link>
                          <Link
                            type="button"
                            className="btn btn-outline-danger font-regular py-2 px-3  rounded hover:scale-95 no-underline"
                            to={"/"}
                          >
                            Eliminar
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>1</td>
                      <td>27/06/2024</td>
                      <td>Componente Tecnico </td>
                      <td>Diurno</td>
                      <td>Activo</td>
                      <td>Desarrollo full stack</td>
                      <td>Intermedio</td>
                      <td>
                        <Link
                            type="button"
                            className="btn btn-outline-primary font-regular py-2 px-3  rounded hover:scale-95 justify-center no-underline mx-2"
                            to={"/"}
                          >
                            Link
                          </Link>
                      </td>
                      <td>
                        <div class="inline-flex">
                          <Link
                            type="button"
                            className="btn btn-outline-primary font-regular py-2 px-3  rounded hover:scale-95 justify-center no-underline mx-2"
                            to={"/EditarSesiones"}
                          >
                            Editar
                          </Link>
                          <Link
                            type="button"
                            className="btn btn-outline-danger font-regular py-2 px-3  rounded hover:scale-95 no-underline"
                            to={"/"}
                          >
                            Eliminar
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <Link
                    type="button"
                    className="btn btn-outline-danger font-regular py-2 px-3   rounded hover:scale-95 no-underline"
                    to={"/Cuerpo"}
                  >
                    Volver
                  </Link>
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

export default Sesiones;
