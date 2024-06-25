import React from "react";
import "./noticia1.css";
//Importamos componentes bootstrap
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";


function Noticia1() {
  return (
    <>
      <Container fluid>
        <Row>
          {/*Col Información noticias*/}
          <Col className="text-aling-rigth">
            <p>
              Cada semana te contaremos todas las novedades del programa,
              presentaremos a nuestros docentes y estudiantes destacados, y
              compartiremos información para mantenerte al día con lo último.
              ¡Queremos que te sientas parte de esta increíble comunidad! Invita
              a tus amigos a suscribirse y no dudes en enviarnos tus comentarios
              y sugerencias a mercadeo@cymetria.com. ¡Estamos aquí para
              escucharte!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Noticia1;
