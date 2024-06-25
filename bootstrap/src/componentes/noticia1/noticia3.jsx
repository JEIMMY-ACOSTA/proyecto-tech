import React from "react";
import "./noticia1.css";
//Importamos componentes bootstrap
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import Image from "react-bootstrap/Image";
import Estudiante from "../../img/Estudiante.png";

function Noticia3() {
  return (
    <>
      <Container fluid>
        <Row>
          {/*Col Información noticias*/}
          <Col className="text-aling-rigth">
            <p>
              Con estudios en Ingeniería de Sistemas y una pasión por la
              ciberseguridad y las redes de datos, ha trabajado
              extensamente en mantenimiento de computadores, redes y pentesting.
              Aunque no terminó su carrera, ha complementado su experiencia con
              cursos y certificaciones en ciberseguridad.
            </p>
          </Col>

          <Col xs={12} lg={6}>
            <Image src={Estudiante} alt="" width="100%" rounded className="imgNoticias"></Image>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Noticia3;
