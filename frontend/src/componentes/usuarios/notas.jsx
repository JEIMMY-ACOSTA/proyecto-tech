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




export default function Notas() {

  const [navbarhidestatus, changenavbarhidestatus] = useState(true);

  const [notas, setNotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = process.env.REACT_APP_API_BACK +"/notas/";

  useEffect(() => {
    const getNotas = async () => {
      try {
        const response = await axios.get(url);

        console.log(response.data.results);

        setNotas(response.data.results || []); // Si no hay resultados, establecer como array vacío
      } catch (error) {
        setError(error); // Captura el error y lo establece en el estado
      } finally {
        setLoading(false); // Marcar carga como completa, independientemente de si hay un error o no
      }

    };

    getNotas();
  }, [url]); // Dependencia: `url`

  // Manejar el estado de carga de datos
  if (loading) {
    return <div>Cargando...</div>;
  }

  // Manejar errores de carga de datos
  if (error) {
    return <div>Error al cargar los datos: {error.message}</div>;
  }

  // Verificar si `notas` está vacío
  if (notas.length === 0) {
    return <div>No se encontraron datos de notas.</div>;
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
                  <h4>Calificaciones</h4>
                  
                </div>

                <table className="table table-light table-hover table-bordered">
                  <thead>
                    <tr className="table-primary">
                      <th scope="col">ID_Calificación</th>
                      <th scope="col">Documento</th>
                      <th scope="col">Nombres</th>
                      <th scope="col">Nota1</th>
                      <th scope="col">Nota2</th>
                      <th scope="col">Nota3</th>
                      <th scope="col">NotaFinal</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notas.map((nota) => (
                      <tr key={nota.ID_CALIFICACION}>
                        <td>{nota.ID_CALIFICACION}</td>
                        <td>{nota.DOCUMENTO}</td>
                        <td>{nota.NOMBRES}</td>
                        <td>{nota.NOTA1}</td>
                        <td>{nota.NOTA2}</td>
                        <td>{nota.NOTA3}</td>
                        <td>{((nota.NOTA1 + nota.NOTA2 + nota.NOTA3) / 3).toFixed(1)}</td>
                        <td>
                          <div className="inline-flex">
                            <a
                              href={`/EditarNotas/${nota.ID_CALIFICACION}`}
                              className="btn btn-outline-success"
                            >
                              Editar
                            </a>
                          </div>
                        </td>
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

