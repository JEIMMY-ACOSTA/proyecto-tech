import React from "react";

import slide1 from '../../img/slide1.png'
import slide2 from '../../img/slide2.png'

//Insertamos el componente de carrusel
import { Carousel } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function SlideFotos() {
  return (
    <Container fluid>
      <Carousel>
        <Carousel.Item>
          <img src={slide1} text="First slide" alt="" width={"100%"} />
        </Carousel.Item>

        <Carousel.Item>
          <img src={slide2} text="First slide" alt="" width={"100%"} />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default SlideFotos;