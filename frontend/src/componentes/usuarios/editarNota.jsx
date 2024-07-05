import React, { useEffect, useState } from "react";
import "./usuarios.css";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Banner from "../banner/banner";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { Link } from "react-router-dom";

import Footer from "../footer/footer";

// Apartado tailwind
import BotonInicio from "../Tailwind/botonInicio";
import BotonBootcamp from "../Tailwind/botonBootcamp";
import BotoneSec2 from "../Tailwind/botoneSec2";
import BotonSec3 from "../Tailwind/botonSec3";
import BotonAdmin from "../Tailwind/botonAdmin";

function EditarNotas() {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtener el ID del usuario de los parámetros de la URL



  const [Nota1, setNota1] = useState("");
  const [Nota2, setNota2] = useState("");
  const [Nota3, setNota3] = useState("");

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const url = `${process.env.REACT_APP_API_BACK}/api/notas/${id}`;
      const response = await axios.get(url); // Aquí se realiza la solicitud GET
      const userData = response.data;
  
        setNota1(userData.NOTA1);
        setNota2(userData.NOTA2);
        setNota3(userData.NOTA3);
    
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchUserData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "Nota1") {
      setNota1(value);
    } else if (name === "Nota2") {
      setNota2(value);
    } else if (name === "Nota3") {
      setNota3(value);
    } 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!Nota1) newErrors.Nota1 = "El tipo de documento es obligatorio";
    if (!Nota2) newErrors.Nota2 = "Los nombres son obligatorios";
    if (!Nota3) newErrors.Nota3 = "El correo electrónico es obligatorio";
    


    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      const url = `${process.env.REACT_APP_API_BACK}/api/notas/${id}`; // Define 'url' para la solicitud PUT
    const response = await axios.put(url, {
      NOTA1: Nota1,
      NOTA2: Nota2,
      NOTA3: Nota3,
    });


      console.log("Respuesta del servidor:", response.data);

      alert("Notas actualizado exitosamente!");
      navigate("/notas");
    } catch (error) {
      console.error("Error al actualizar notas:", error);

      if (error.response) {
        console.error("Error en la respuesta del servidor:", error.response.data);
      } else if (error.request) {
        console.error("No se recibió respuesta del servidor:", error.request);
      } else {
        console.error("Error en la configuración de la solicitud:", error.message);
      }

      alert("Error al actualizar usuario. Por favor, intenta nuevamente.");
    }
  };

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

        <Col>
          <Col>
            <Banner />
            <br />
          </Col>

          <Row>
            <Col>
              <div className="container-fluid py-4 border rounded-3">
                <h4>Editar Notas</h4>
                <br />
                <form onSubmit={handleSubmit}>
                  <input id="id" name="id" value="1" hidden />
                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-5">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-city"
                      >
                        Nota 1
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        // id="grid-city"
                        id="Nota1"
                        type="number"
                        name="Nota1"
                        value={Nota1}
                        onChange={handleChange}
                        min='0'
                        max='5'
                        required
                        placeholder="Ingrese la nota"
                      />
                      {errors.Nota1 && <div className="invalid-feedback">{errors.Nota1}</div>}
                    </div>

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-5">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-city"
                      >
                        Nota 2
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        // id="grid-city"
                        id="Nota2"
                        type="number"
                        name="Nota2"
                        value={Nota2}
                        onChange={handleChange}
                        min='0'
                        max='5'
                        required
                        placeholder="Ingrese la nota"
                      />
                      {errors.Nota2 && <div className="invalid-feedback">{errors.Nota2}</div>}
                    </div>

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-5">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-city"
                      >
                        Nota 3
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        // id="grid-city"
                        id="Nota3"
                        type="number"
                        name="Nota3"
                        value={Nota3}
                        onChange={handleChange}
                        min='0'
                        max='5'
                        required
                        placeholder="Ingrese la nota"
                      />
                      {errors.Nota3 && <div className="invalid-feedback">{errors.Nota3}</div>}
                    </div>

                    <div className="inline-flex mt-4 mx-2">
                      <button
                        type="submit"
                        className="bg-cyan-500 text-white font-regular py-2 px-3 rounded hover:scale-95 justify-center no-underline mx-2"
                      >
                        Guardar
                      </button>
                      <Link
                        type="button"
                        className="bg-red-700 text-white font-regular py-2 px-3 rounded hover:scale-95 no-underline"
                        to={"/notas"}
                      >
                        Cancelar
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Col>
      </Row >

      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container >
  );
}

export default EditarNotas;
