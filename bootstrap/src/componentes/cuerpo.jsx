import React, { useEffect, useState } from "react";
import "./cuerpo.css";

//Creamos el componente
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Banner from "./banner/banner";

import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import ClassCard from "../card/card";
import { classInfo } from "../global/classesinfo";

import Footer from "./footer/footer";
import BarraPro from "./barra/barraPro";

//Apartado tailwind
import BotonInicio from "../componentes/Tailwind/botonInicio";
import BotonBootcamp from "./Tailwind/botonBootcamp";
import BotoneSec2 from "./Tailwind/botoneSec2";
import BotonSec3 from "./Tailwind/botonSec3";
import BotonRecursos from "./Tailwind/botonRecursos";

function Cuerpo() {
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
            <br />
            {/*Sesiones virtuales*/}
            <Col md={8}>
              <h3>Desarrollo Web Full Stack</h3>
              <p>Desarrollo del bootcamp:</p>
              <div className="acordeon">
                <Accordion flush>
                  {/**! ESTUIAR!! */}
                  {classInfo.map((info, index) => {
                    return (
                      <>
                        <ClassCard classInfo={info} eventKey={index} />
                        <br />
                      </>
                    );
                  })}
                </Accordion>
              </div>
            </Col>

            {/*Contenidos*/}
            <Col>
              {/*Barra de progreso*/}
              <Card style={{ width: "100%" }} className="text-left">
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Card.Title>
                        <h5>Progreso 45%</h5>
                        <BarraPro />
                      </Card.Title>
                    </ListGroup.Item>

                    {/*Recursos*/}
                    <ListGroup.Item>
                      <Card.Title>Recursos:</Card.Title>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <BotonRecursos />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
              <br />

              {/*Apartado de Tickets*/}
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

      {/*Parte Pie de Pagina*/}
      <Row>
        <Col>
          <Footer></Footer>
        </Col>
      </Row>
    </Container>
  );
}

export default Cuerpo;
