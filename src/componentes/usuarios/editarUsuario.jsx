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

function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtener el ID del usuario de los parámetros de la URL
  const url = `${process.env.REACT_APP_API_BACK +"/users/"}/${id}`;

  const [Documento, setDocumento] = useState("");
  const [nombres, setNombres] = useState("");
  const [email, setEmail] = useState("");
  const [Tipo_Rol, setTipo_Rol] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [telefono, setTelefono] = useState("");
  const [programa, setPrograma] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${"http://localhost:3001/api/users"}/${id}`);
        const userData = response.data;
        setDocumento(userData.DOCUMENTO);
        setNombres(userData.NOMBRES);
        setEmail(userData.EMAIL);
        setTipo_Rol(userData.TIPO_ROL);
        setContrasena(userData.CONTRASENA);
        setTelefono(userData.TELEFONO);
        setPrograma(userData.PROGRAMA);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchUserData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "Documento") {
      setDocumento(value);
    } else if (name === "nombres") {
      setNombres(value);
    } else if (name === "Email") {
      setEmail(value);
    } else if (name === "Rol") {
      setTipo_Rol(value);
    } else if (name === "contrasena") {
      setContrasena(value);
    } else if (name === "Telefono") {
      setTelefono(value);
    } else if (name === "Programa") {
      setPrograma(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!Documento) newErrors.tipoDocumento = "El tipo de documento es obligatorio";
    if (!nombres) newErrors.nombres = "Los nombres son obligatorios";
    if (!email) newErrors.email = "El correo electrónico es obligatorio";
    if (!Tipo_Rol) newErrors.Tipo_Rol = "El rol es obligatorio";
    if (!contrasena) newErrors.contrasena = "La contraseña es obligatoria";
    if (!telefono) newErrors.telefono = "El telefono no es valido";
    if (!programa) newErrors.prgrama = "El programa es obligatorio";


    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      const identificacionDecimal = parseFloat(Documento);

      if (isNaN(identificacionDecimal)) {
        alert("El número de identificación no es válido");
        return;
      }

      const response = await axios.put(url, {

        DOCUMENTO: Documento,
        NOMBRES: nombres,
        EMAIL: email,
        TIPO_ROL: Tipo_Rol,
        CONTRASENA: contrasena,
        TELEFONO: telefono,
        PROGRAMA: programa
      });

      console.log("Respuesta del servidor:", response.data);

      alert("Usuario actualizado exitosamente!");
      navigate("/usuarios");
    } catch (error) {
      console.error("Error al actualizar usuario:", error);

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
                <h4>Editar usuario</h4>
                <br />
                <form onSubmit={handleSubmit}>
                  <input id="id" name="id" value="1" hidden />
                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-5">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-city"
                      >
                        Nombres
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        
                        id="nombres"
                        type="text"
                        name="nombres"
                        value={nombres}
                        onChange={handleChange}
                        required
                        placeholder="Ingrese Nombres"
                      />
                      {errors.nombres && <div className="invalid-feedback">{errors.nombres}</div>}
                    </div>

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-zip"
                      >
                        Documento
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-zip"
                        name="Documento"
                        value={Documento}
                        onChange={handleChange}
                        required
                        placeholder="Ingrese Documento"
                        type="number"
                      />
                      {errors.Documento && <div className="invalid-feedback">{errors.Documento}</div>}
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-5">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-city"
                      >
                        Tipo_Rol
                      </label>
                      <select
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="rol"
        name="Rol"
        value={Tipo_Rol}
        onChange={(e) => setTipo_Rol(e.target.value)}
        required
      >
        <option value="" disabled>
          Seleccione el tipo de rol
        </option>
        <option value="Estudiante">Estudiante</option>
        <option value="Docente">Docente</option>
        <option value="Administrador">Administrador</option>
      </select>
                      {errors.Tipo_Rolrol && <div className="invalid-feedback">{errors.Tipo_Rol}</div>}
                    </div>

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-zip"
                      >
                        Contrasena
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-zip"
                        name="contrasena"
                        value={contrasena}
                        onChange={handleChange}
                        required
                        placeholder="Ingrese contraseña"
                        type="password"
                      />
                      {errors.contrasena && <div className="invalid-feedback">{errors.contrasena}</div>}
                    </div>

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-city"
                      >
                        Email
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        name="Email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                        required
                        placeholder="Ingrese Email"
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-zip"
                      >
                        Teléfono
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-zip"
                        type="number"
                        name="Telefono"
                        value={telefono}
                        onChange={handleChange}
                        required
                        placeholder="Ingrese su número"
                      />
                      {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
                    </div>

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-zip"
                      >
                        Programa
                      </label>
                      <select
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="Programa"
        name="Programa"
        value={programa}
        onChange={(e) => setPrograma(e.target.value)}
        required
      >
        <option value="" disabled>
          Seleccione el programa
        </option>
        <option value="Desarrollo Full Stack">Desarrollo Web Full Stack</option>
        <option value="Blockchain">Blockchain</option>
        <option value="Arquitectura en la Nube">Arquitectura en la Nube</option>
        <option value="Análisis y visualizacion de Datos">Análisis y visualizacion de Datos</option>
        <option value="Inteligencia Artificial">Inteligencia Artificial</option>
      </select>
                      {errors.programa && <div className="invalid-feedback">{errors.programa}</div>}
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
                        to={"/usuarios"}
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

export default EditUser;
