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
function EditSession() {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtener el ID de la sesión de los parámetros de la URL
  const urlEditSession = `${"http://localhost:3001/api/sesiones"}/${id}`;
  const urlNewSession = "http://localhost:3001/api/sesiones";

  const [numero_sesion, setNumero_sesion] = useState("");
  const [estado, setEstado] = useState("");
  const [fecha, setFecha] = useState(new Date());
  const [componente, setComponente] = useState("");
  const [horario, setHorario] = useState("");
  const [curso, setCurso] = useState("");
  const [nivel, setNivel] = useState("");
  const [link, setLink] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        if (!id) return;
        const response = await axios.get(`${"http://localhost:3001/api/sesiones"}/${id}`);
        const sessionData = response.data;
        setFecha(new Date(Date.parse(sessionData.FECHA)).toISOString().split('T')[0]);
        setComponente(sessionData.COMPONENTE);
        setHorario(sessionData.HORARIO);
        setCurso(sessionData.CURSO);
        setNivel(sessionData.NIVEL);
        setLink(sessionData.LINK);
        setNumero_sesion(sessionData.NUMERO_SESION);
        setEstado(sessionData.ESTADO);
      } catch (error) {
        console.error("Error al obtener los datos de la sesión:", error);
      }
    };
    
    fetchSessionData();

  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "fecha") {
      setFecha(value);
    } else if (name === "componente") {
      setComponente(value);
    } else if (name === "horario") {
      setHorario(value);
    } else if (name === "curso") {
      setCurso(value);
    } else if (name === "nivel") {
      setNivel(value);
    } else if (name === "link") {
      setLink(value);
    } else if (name === "estado") {
      setEstado(value);
    }else if (name === "numero_sesion") {
        setNumero_sesion(value);  
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!fecha) newErrors.fecha = "La fecha es obligatoria";
    if (!componente) newErrors.componente = "El componente es obligatorio";
    if (!horario) newErrors.horario = "El horario es obligatorio";
    if (!curso) newErrors.curso = "El curso es obligatorio";
    if (!nivel) newErrors.nivel = "El nivel es obligatorio";
    if (!link) newErrors.link = "El link es obligatorio";
    if (!numero_sesion) newErrors.sessionId = "El ID de sesión es obligatorio";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      const body = {
        NUMERO_SESION: numero_sesion,
        FECHA: fecha,
        COMPONENTE: componente,
        HORARIO: horario,
        CURSO: curso,
        NIVEL: nivel,
        LINK: link,
      }
      let response;
      if (id) {
        response = await axios.put(urlEditSession, body);
      } else {
        response = await axios.post(urlNewSession, body);
      }

      console.log("Respuesta del servidor:", response.data);

      alert("Sesión actualizada exitosamente!");
      navigate("/cuerpo");
    } catch (error) {
      console.error("Error al actualizar sesión:", error);

      if (error.response) {
        console.error("Error en la respuesta del servidor:", error.response.data);
      } else if (error.request) {
        console.error("No se recibió respuesta del servidor:", error.request);
      } else {
        console.error("Error en la configuración de la solicitud:", error.message);
      }

      alert("Error al actualizar sesión. Por favor, intenta nuevamente.");
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
                  <BotonBootcamp/>
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
                <h4>{id ? "Editar sesión" : "Crear sesión"}</h4>
                <br />
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-5">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-session-id"
                      >
                        Numero sesion
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="numero_sesion"
                        name="numero_sesion"
                        type="number"
                        value={numero_sesion}
                        onChange={handleChange}
                        required
                        placeholder="Numero de sesion"
                      />
                      {errors.numero_sesion && <div className="invalid-feedback">{errors.numero_sesion}</div>}
                    </div>

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-5">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-fecha"
                      >
                        Fecha
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="fecha"
                        type="date"
                        name="fecha"
                        value={fecha}
                        onChange={handleChange}
                        required
                        placeholder="Ingrese Fecha"
                      />
                      {errors.fecha && <div className="invalid-feedback">{errors.fecha}</div>}
                    </div>

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-componente"
                      >
                        Componente
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="componente"
                        name="componente"
                        value={componente}
                        onChange={handleChange}
                        required
                        placeholder="Ingrese Componente"
                      />
                      {errors.componente && <div className="invalid-feedback">{errors.componente}</div>}
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-5">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-horario"
                      >
                        Horario
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="horario"
                        type="time"
                        name="horario"
                        value={horario}
                        onChange={handleChange}
                        required
                        placeholder="Ingrese Horario"
                      />
                      {errors.horario && <div className="invalid-feedback">{errors.horario}</div>}
                    </div>

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-curso"
                      >
                        Curso
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="curso"
                        name="curso"
                        value={curso}
                        onChange={handleChange}
                        required
                        placeholder="Ingrese Curso"
                      />
                      {errors.curso && <div className="invalid-feedback">{errors.curso}</div>}
                    </div>

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-nivel"
                      >
                        Nivel
                      </label>
                      <div class="relative">
                        <select
                          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="NIVEL"
                          //Estos valores (1, 2 y 3) son los que se enviarán al servidor cuando el usuario seleccione una opción y se envíe el formulario,
                          //por lo que puedes usarlos para procesar la entrada de manera consistente en tu backend :3.
                        >
                          <option value="" disabled>
                            Seleccione el nivel
                          </option>
                          <option value="BASICO">Básico</option>
                          <option value="INTERMEDIO">Intermedio</option>
                          <option value="AVANZADO">Avanzado</option>
                        </select>
                      </div>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >
                        LINK
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="nivel"
                        name="nivel"
                        value={nivel}
                        onChange={handleChange}
                        required
                        placeholder="Ingrese Nivel"
                      />
                      {errors.nivel && <div className="invalid-feedback">{errors.nivel}</div>}
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-link"
                      >
                        Link
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="link"
                        name="link"
                        value={link}
                        onChange={handleChange}
                        required
                        placeholder="Ingrese Link"
                      />
                      {errors.link && <div className="invalid-feedback">{errors.link}</div>}
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
                        to={"/cuerpo"}
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
      </Row>

      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default EditSession;
