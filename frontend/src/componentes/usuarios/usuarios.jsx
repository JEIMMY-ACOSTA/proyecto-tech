import React, { useEffect, useState } from "react";

import "./usuarios.css";

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

// Servicios
import {
  fetchUsers,



} from "../../services/userService";

import axios from "axios";

function Usuarios() {
  const [navbarhidestatus, changenavbarhidestatus] = useState(true);
  const [users, setUsers] = useState([]);
  // const navigate = useNavigate();
  // const [newUser, setNewUser] = useState({
  //   NOMBRES: "",
  //   CONTRASENA: "",
  //   EMAIL: "",
  //   TIPO_ROL: "",
  //   DOCUMENTO: "",
  //   TELEFONO: "",
  //   PROGRAMA: "",
  // });

  useEffect(() => {
    const loadUsers = async () => {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    };

    loadUsers();
  }, []);



  // const handleUpdateUser = async (id) => {
  //   const updatedUser = await updateUser(id, newUser);
  //   setUsers(users.map((user) => (user.ID_USUARIOS === id ? updatedUser : user)));
  //   setNewUser({
  //     NOMBRES: "",
  //     CONTRASENA: "",
  //     EMAIL: "",
  //     TIPO_ROL: "",
  //     DOCUMENTO: "",
  //     TELEFONO: "",
  //     PROGRAMA: "",
  //   });
  // };



  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbarhidestatus) {
      navbar.classList.add("sm-hide");
    } else {
      navbar.classList.remove("sm-hide");
    }
  }, [navbarhidestatus]);

  const eliminarUsuario = async (idUsuario) => {
    try {
      
    
      const url = `${process.env.REACT_APP_API_BACK +"/api/users/"}/${idUsuario}`;

      const response = await axios.delete(url);

      console.log("Usuario eliminado:", response.data);
      // navigate("/usuarios");
      // Actualizar la lista de usuarios después de la eliminación
      // getUsuarios();
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
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
                  <h4>Usuarios</h4>
                  <Link
                    type="button"
                    className="btn btn-primary font-regular py-2 rounded hover:scale-95"
                    to={"/create"}
                  >
                    Crear nuevo usuario
                  </Link>
                </div>
                <table className="table table-light table-hover table-bordered">
                  <thead>
                    <tr className="table-primary">
                      <th scope="col">ID</th>
                      <th scope="col">Rol</th>
                      <th scope="col">Documento</th>
                      <th scope="col">Nombres</th>
                      <th scope="col">Email</th>
                      <th scope="col">Telefono</th>
                      <th scope="col">Contraseña</th>
                      <th scope="col">Programa</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.ID_USUARIO}>
                        <td>{user.ID_USUARIO}</td>
                        <td>{user.TIPO_ROL}</td>
                        <td>{user.DOCUMENTO}</td>
                        <td>{user.NOMBRES}</td>
                        <td>{user.EMAIL}</td>
                        <td>{user.TELEFONO}</td>
                        <td>{user.CONTRASENA}</td>
                        <td>{user.PROGRAMA}</td>
                        <td>
                          <div className="inline-flex">
                            <a
                              href={`./EditUser/${user.ID_USUARIO}`}
                              className="btn btn-outline-success"
                            >
                              Editar
                            </a>
                            <button
                              className="btn btn-outline-danger"
                              onClick={() => {
                                if (
                                  window.confirm(
                                    "¿Estás seguro de que deseas eliminar este usuario?"
                                  )
                                ) {
                                  eliminarUsuario(user.ID_USUARIO);
                                  window.location.reload();
                                }
                              }}
                            >
                              Eliminar
                            </button>
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

export default Usuarios;
