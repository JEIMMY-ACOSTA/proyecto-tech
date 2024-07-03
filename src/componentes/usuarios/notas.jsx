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

function Notas() {
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
                  <h4>Caificaciones</h4>
                </div>
                <table class="table table-light table-hover table-bordered">
                  <thead>
                    <tr class="table-primary">
                      <th scope="col">Nombres</th>
                      <th scope="col">Apellidos</th>
                      <th scope="col">Nota1</th>
                      <th scope="col">Nota2</th>
                      <th scope="col">Nota3</th>
                      <th scope="col">Nota final</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Dina</td>
                      <td>Lamilla González</td>
                      <td>2,5</td>
                      <td>3,2</td>
                      <td>5</td>
                      <td>5</td>
                      <td>
                        <div class="inline-flex">
                          <Link
                            type="button"
                            className="btn btn-outline-primary font-regular py-2 px-3  rounded hover:scale-95 justify-center no-underline mx-2"
                            to={"/EditarNotas"}
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
                      <td>Luis</td>
                      <td>González González</td>
                      <td>3,6</td>
                      <td>5</td>
                      <td>4</td>
                      <td>4</td>
                      <td>
                        <div class="inline-flex">
                          <Link
                            type="button"
                            className="btn btn-outline-primary font-regular py-2 px-3  rounded hover:scale-95 justify-center no-underline mx-2"
                            to={"/EditarNotas"}
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

export default Notas;
