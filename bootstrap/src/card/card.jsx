import React from "react";
import { Accordion, Button } from "react-bootstrap";

function CassCard({ classInfo, eventKey }) {
  {
    /**! ESTUIAR!! */
  }
  return (
    <Accordion.Item eventKey={eventKey.toString()}>
      <Accordion.Header>{classInfo.header}</Accordion.Header>

      <Accordion.Body>
        Horario de la sesión: {classInfo.horario}
        <br />
        Asistencia: {classInfo.estadoAsistencia}
        <br />
        Descripción: {classInfo.desciption}
        <br />
        <br />
        <Button variant="primary">Ingresar</Button>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default CassCard;
