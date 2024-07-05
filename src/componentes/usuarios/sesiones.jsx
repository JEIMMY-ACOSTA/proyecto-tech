import React, { useEffect, useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

// Componentes de Bootstrap y Tailwind
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Banner from "../banner/banner";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";

// Componentes de Tailwind
import BotonInicio from "../Tailwind/botonInicio";
import BotonBootcamp from "../Tailwind/botonBootcamp";
import BotoneSec2 from "../Tailwind/botoneSec2";
import BotonSec3 from "../Tailwind/botonSec3";
import BotonAdmin from "../Tailwind/botonAdmin";

export default function Sesiones() {
  const [navbarhidestatus, changenavbarhidestatus] = useState(true);
  const [sesiones, setSesiones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "http://localhost:3001/api/notas/";

  useEffect(() => {
    const getSesiones = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data.results);
        setSesiones(response.data.results || []); // Si no hay resultados, establecer como array vacío
      } catch (error) {
        setError(error); // Captura el error y lo establece en el estado
      } finally {
        setLoading(false); // Marcar carga como completa, independientemente de si hay un error o no
      }
    };

    getSesiones();
  }, [url]); // Dependencia: `url`

  // Manejar el estado de carga de datos
  if (loading) {
    return <div>Cargando...</div>;
  }

  // Manejar errores de carga de datos
  if (error) {
    return <div>Error al cargar los datos: {error.message}</div>;
  }

  // Verificar si `sesiones` está vacío
  if (sesiones.length === 0) {
    return <div>No se encontraron sesiones.</div>;
  }

  return (
    <Container fluid>
      <Row>
        <Col md={3} sm={0} id="navbar" className="">
          <Card style={{ width: "100%", height: "100%" }} className="text-left">
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Card.Title>
                    <BotonInicio />
                  </Card.Title>
                </ListGroup.Item>
                <ListGroup.Item>
                  <BotonBootcamp />
                </ListGroup.Item>
                <ListGroup.Item>
                  <BotoneSec2 />
                </ListGroup.Item>
                <ListGroup.Item>
                  <BotonSec3 />
                </ListGroup.Item>
                <ListGroup.Item>
                  <BotonAdmin />
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col className="col">
          <Col>
            <Banner />
            <br />
            <Button
              onClick={() => changenavbarhidestatus(!navbarhidestatus)}
              className="lg-hide"
            >
              Navbar
            </Button>
          </Col>

          <Row>
            <Col className="fluid">
              <div
                className="container-fluid py-4 border rounded-3"
                style={{ maxHeight: "500px", overflowY: "auto" }}
              >
                <div className="mb-4">
                  <h4>Sesiones</h4>
                </div>
                <Link
                  type="button"
                  className="btn btn-outline-danger font-regular py-2 px-3 rounded hover:scale-95 no-underline"
                  to={"/Cuerpo"}
                >
                  Volver
                </Link> <br />
                <table className="table table-light table-hover table-bordered">
                  <thead>
                    <tr className="table-primary">
                      <th scope="col">Número sesión</th>
                      <th scope="col">Fecha</th>
                      <th scope="col">Componente</th>
                      <th scope="col">Horario</th>
                      <th scope="col">Estado</th>
                      <th scope="col">Curso </th>
                      <th scope="col">Nivel</th>
                      <th scope="col">Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sesiones.map((sesion) => (
                      <tr key={sesion.ID_SESION}>
                        <td>{sesion.NUMERO_SESION}</td>
                        <td>{sesion.FECHA}</td>
                        <td>{sesion.COMPONENTE}</td>
                        <td>{sesion.HORARIO}</td>
                        <td>{sesion.ESTADO}</td>
                        <td>{sesion.CURSO}</td>
                        <td>{sesion.NIVEL}</td>
                        <td>{sesion.LINK}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <br />
                <Link
                  type="button"
                  className="btn btn-outline-danger font-regular py-2 px-3 rounded hover:scale-95 no-underline"
                  to={"/Cuerpo"}
                >
                  Volver
                </Link>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}


