import React, { useEffect, useState } from "react";
import "./inicio.css";

import { Link } from "react-router-dom";

//Creamos el componente
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Banner from "../banner/banner";
import Img from "../../img/img.png";

//import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { Tabs, Tab } from "react-bootstrap";

import Footer from "./../footer/footer";
import Noticia1 from "../noticia1/noticia1";
import Noticia2 from "../noticia1/noticia2";
import Noticia3 from "../noticia1/noticia3";

//Apartado tailwind
import BotonInicio from "../Tailwind/botonInicio";
import BotonBootcamp from "../Tailwind/botonBootcamp";
import BotoneSec2 from "../Tailwind/botoneSec2";
import BotonSec3 from "../Tailwind/botonSec3";
import BotonAdmin from "../Tailwind/botonAdmin";


function Inicio() {
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
        <Col md={3} sm={0} id="navbar">
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

                {/*Cuerpo menú 3 SECCIÓN 2*/}
                <ListGroup.Item>
                  <BotoneSec2 />
                </ListGroup.Item>
                

                {/*Cuerpo menú 3 parte*/}
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
              variant="outline-secondary"
              onClick={() => changenavbarhidestatus(!navbarhidestatus)}
              className="lg-hide"
            >
              Navbar
            </Button>
            <br />
          </Col>

          {/*Bootcamp Y Ticket*/}
          <Row>
            {/*Bootcamp INGRESO*/}
            <Col md={6} sm={2}>
              <Card style={{ width: "75%" }} className="text-left">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <Card.Img variant="Top" src={Img} width={"100%"} />
                    </ListGroup.Item>
                    <br />
                    {/* INFO DE Bootcamp*/}
                    <ListGroup>
                      <Card.Title>Desarrollo Web Full Stack</Card.Title>
                      <p>
                        <strong>Horario: </strong>Lunes a viernes: 6am a 8am
                        Sábado: 7 am a 10:00 am
                      </p>
                      <p>
                        <strong>Sede: </strong>N/A
                      </p>
                      <p>
                        <strong>Nivel: </strong>Intermedio
                      </p>
                      <p>
                        <strong>Modalidad: </strong>Virtual{" "}
                      </p>
                      <p>
                        <strong>Fecha de inicio: </strong>2024-03-21
                      </p>
                    </ListGroup>
                    <br />
                    <ListGroup>
                      <Link className="btn btn-primary" to={"/Cuerpo"}>
                        Ingresar
                      </Link>
                    </ListGroup>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            {/*Apartado de Noticias*/}
            <Col>
              {/* Apartado de noticias*/}
              <Row>
                <Col>
                  <h4 className="ApartadoNoticia">
                    Entérate de lo que está pasando en TECH
                  </h4>
                  {/*defaultActiveKey="profile" para que funcione los eventos y cambie de contenido*/}
                  <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3 justify-content-center"
                  >
                    <Tab eventKey={0} title="Noticias">
                      <Noticia1 />
                    </Tab>

                    <Tab eventKey={1} title="Docentes Destacados">
                      <Noticia2 />
                    </Tab>

                    <Tab eventKey={2} title="Estudiantes Destacados">
                      <Noticia3 />
                    </Tab>
                  </Tabs>
                </Col>
              </Row>
              {/* Fin del Apartado de noticias*/}
              <br />
              <br />
              {/* TICKET*/}
              <Card
                style={{ width: "100%" }}
                border="none"
                className="text-center"
              >
                <Card.Body>
                  <div class=" rounded overflow-hidden shadow-lg">
                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2">
                        ¡CREA TU TICKET AHORA!
                      </div>
                      <p class="text-gray-700 text-base">
                        Comunícanos tu inconveniente, para aseguramos de que tu
                        experiencia sea satisfactoria.
                      </p>
                      <button className="bg-transparent border-2 border-emerald-600 text-emerald-600 text-4xs font-bold px-5 py-3 rounded hover:scale-95">
                        ¡CREAR TICKET!
                      </button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />

      {/*Parte Pie de Pagina*/}
      <Row>
        <Col>
          <Footer></Footer>
        </Col>
      </Row>
    </Container>
  );
}

export default Inicio;
