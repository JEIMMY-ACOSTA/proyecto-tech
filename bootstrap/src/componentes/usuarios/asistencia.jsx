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

function Asistencia() {
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
                  <h4>Asistencia General</h4>
                </div>
                <table class="table table-light table-hover table-bordered">
                  <thead>
                    <tr class="table-primary">
                      <th scope="col">Nombres</th>
                      <th scope="col">Apellidos</th>
                      <th scope="col">Fecha</th>
                      <th scope="col">Hora</th>
                      <th scope="col">Estado</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Dina</td>
                      <td>Lamilla González</td>
                      <td>25/06/2024</td>
                      <td>06:55</td>
                      <td>Asistente</td>
                    </tr>
                    <tr>
                      <td>Luis</td>
                      <td>González González</td>
                      <td>25/06/2024</td>
                      <td>06:55</td>
                      <td>No asistio</td>
                    </tr>
                  </tbody>
                </table>
                <br />
                {/*ASISTENTES */}
                <hr class="my-4" />
                <br />
              </div>
              <div class="container-xl">
                <div class=" mb-4">
                  <h4>Asistentes</h4>
                </div>
                <table class="table table-light table-hover table-bordered">
                  <thead>
                    <tr class="table-primary">
                      <th scope="col">Nombres</th>
                      <th scope="col">Apellidos</th>
                      <th scope="col">Fecha</th>
                      <th scope="col">Hora</th>
                      <th scope="col">Estado</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Dina</td>
                      <td>Lamilla González</td>
                      <td>25/06/2024</td>
                      <td>06:55</td>
                      <td>Asistente</td>
                    </tr>
                  </tbody>
                </table>
                <hr class="my-4" />
              </div>
              {/* NO ASISTENTES */}
              <div class="container-xl">
                <div class=" mb-4">
                  <h4>Inasistencias</h4>
                </div>
                <table class="table table-light table-hover table-bordered">
                  <thead>
                    <tr class="table-primary">
                      <th scope="col">Nombres</th>
                      <th scope="col">Apellidos</th>
                      <th scope="col">Fecha</th>
                      <th scope="col">Hora</th>
                      <th scope="col">Estado</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Luis</td>
                      <td>González González</td>
                      <td>25/06/2024</td>
                      <td>06:55</td>
                      <td>No asistio</td>
                    </tr>
                  </tbody>
                  <Link
                    type="button"
                    className="btn btn-outline-danger font-regular py-2 px-3 mt-5  rounded hover:scale-95 no-underline"
                    to={"/Cuerpo"}
                  >
                    Volver
                  </Link>
                </table>
                <br />
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

export default Asistencia;
