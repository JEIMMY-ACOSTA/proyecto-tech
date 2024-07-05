import React, { useEffect, useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "./cuerpo.css";

// Componentes de Bootstrap y Tailwind
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Banner from "./banner/banner";
import Footer from "./footer/footer";
import BarraPro from "./barra/barraPro";
import BotonInicio from "../componentes/Tailwind/botonInicio";
import BotonBootcamp from "./Tailwind/botonBootcamp";
import BotoneSec2 from "./Tailwind/botoneSec2";
import BotonSec3 from "./Tailwind/botonSec3";
import BotonRecursos from "./Tailwind/botonRecursos";
import BotonAdmin from "./Tailwind/botonAdmin";
import { Link } from "react-router-dom";

function Cuerpo() {
  // Estado para ocultar el menú
  const [navbarhidestatus, changenavbarhidestatus] = useState(true);

  // Estado para almacenar las sesiones
  const [sesiones, setSesiones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "http://localhost:3001/api/sesiones/"; // Asegúrate de que esta URL es correcta

  useEffect(() => {
    const getSesiones = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        // Asegúrate de que data es un array
        if (Array.isArray(data)) {
          setSesiones(data);
        } else {
          setSesiones([]);
        }
      } catch (error) {
        setError(error); // Captura el error y lo establece en el estado
      } finally {
        setLoading(false); // Marcar carga como completa, independientemente de si hay un error o no
      }
    };

    getSesiones();
  }, [url]); // Dependencia: `url`

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if (navbarhidestatus) {
        navbar.classList.add("sm-hide");
      } else {
        navbar.classList.remove("sm-hide");
      }
    }
  }, [navbarhidestatus]);

  // Manejar el estado de carga de datos
  if (loading) {
    return <div>Cargando...</div>;
  }

  // Manejar errores de carga de datos
  if (error) {
    return <div>Error al cargar los datos: {error.message}</div>;
  }

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
                {/*LLama componente de usuario*/}
                <ListGroup.Item>
                  <Card.Title>
                    <BotonInicio />
                  </Card.Title>
                </ListGroup.Item>

                {/*Cuerpo menú bootcamps*/}
                <ListGroup.Item>
                  <BotonBootcamp />
                </ListGroup.Item>

                {/*Cuerpo menú 3 parte (Hackathos..)*/}
                <ListGroup.Item>
                  <BotoneSec2 />
                </ListGroup.Item>

                {/*Cuerpo menú 4 parte Manual de usuario y preguntas "llamamos componente"*/}
                <ListGroup.Item>
                  <BotonSec3 />
                </ListGroup.Item>

                {/*Cuerpo menú PARTE DE ADMIN*/}
                <ListGroup.Item>
                  <BotonAdmin />
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/*Parte CENTRO PAG*/}
        <Col className="col">
          {/*Banner y boton*/}
          <Col>
            <Banner />
            <br />

            {/**! CONTINUACIÓN DE LA FUNCIÓN PARA OCULTAR EL MENU!! */}
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
            {/*card de Sesiones virtuales*/}
            <Col md={8}>
              <h3>Desarrollo Web Full Stack</h3>

              <Link
                type="button"
                className="btn btn-outline-danger font-regular py-2 px-3 mt-5 rounded hover:scale-95 no-underline"
                to={"/NuevaSesion"}
              >
                Añadir sesion
              </Link>

              <p>Desarrollo del bootcamp:</p>
              <div className="acordeon">
                <Accordion flush>
                  {sesiones.length > 0 ? (
                    sesiones.map((sesion, index) => (
                      <Accordion.Item eventKey={index} key={sesion.ID_SESIONES}>
                        <Accordion.Header>
                          Sesión {sesion.NUMERO_SESION}: {sesion.COMPONENTE}
                        </Accordion.Header>
                        <Accordion.Body>
                          {/* Detalles de la sesión */}
                          <a
                              href={`./EditarSesiones/${sesion.ID_SESIONES}`}
                              className="btn btn-outline-success"
                            >
                              Editar
                            </a>
                          <p>Fecha: {new Date(Date.parse(sesion.FECHA)).toISOString()?.split('T')[0]}</p>
                          <p>Horario: {sesion.HORARIO}</p>
                          <p>Estado: {sesion.ESTADO}</p>
                          <p>Curso: {sesion.CURSO}</p>
                          <p>Nivel: {sesion.NIVEL}</p>
                          <p>Link: <a href={sesion.LINK} target="_blank" rel="noopener noreferrer">{sesion.LINK}</a></p>
                          <p>ID Asistencia: {sesion.ID_ASISTENCIA}</p>

                        </Accordion.Body>
                      </Accordion.Item>
                    ))
                  ) : (
                    <p>No hay sesiones disponibles.</p>
                  )}
                </Accordion>
              </div>
              </Col>

            {/*Contenidos PARTE DERECHA (TICKET....)*/}
            <Col>
              {/*Barra de progreso (COMPONENTE BARRA)*/}
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

              {/*Apartado de SlideFotos*/}
              <Card
                style={{ width: "100%" }}
                border="none"
                className="text-center"
              >
                <Card.Body>
                  <div>
                    {/*Apartado de SlideFotos NO ESTÁ EL COMPONENTE :3*/}
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
