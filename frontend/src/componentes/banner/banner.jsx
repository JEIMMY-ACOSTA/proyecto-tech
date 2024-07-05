import React from "react";
import "./banner.css";

import banner1 from '../../img/Banner1.png'
import banner2 from '../../img/Banner2.png'
import banner3 from '../../img/Banner3.png'
 
//Insertamos el componente de carrusel
import { Carousel } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function Banner() {
  return (
    <Container fluid>
      <Carousel>
        <Carousel.Item>
          <img src={banner1} text="First slide" alt="" width={"100%"} />
        </Carousel.Item>

        <Carousel.Item>
          <img src={banner2} text="First slide" alt="" width={"100%"} />
        </Carousel.Item>

        <Carousel.Item>
          <img src={banner3} text="First slide" alt="" width={"100%"} />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Banner;
