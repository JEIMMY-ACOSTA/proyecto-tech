import React from "react";
import "./footer.css";
//Importamos componentes bootstrap
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import Image from "react-bootstrap/Image";
import LogoTech from "../../img/LogoTech.png";

function Footer() {
  return (
    <>
      <Container fluid className="Footer">
        <Row  >
          {/*Col logo*/}
          <Col sm={4} xs={6}>
            <Image src={LogoTech} alt="" width="50%"></Image>
          </Col>

          {/*Col Info p1*/}
          <Col>
            <p>
              <strong>WhatsApp: </strong>
              +57 311 4921831
              <br />
              <strong>Correo: </strong>
              formacion@talentotechbogota.co
              <br />
              <strong>Página oficial: </strong>
              talentotechbogota.co
              <br />
            </p>
          
          {/*Col Info*/}
          </Col>
          
          {/*Col Info p2*/}
          <Col>
          <p>
            <strong>Número: </strong>
            +57 310 8750664
            <br/>
            <strong>Número de seguimiento: </strong>
            +57 310 7699174
            <br />
            <strong>Creadora :3: Dina Lamilla</strong>
            <br />
          </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
