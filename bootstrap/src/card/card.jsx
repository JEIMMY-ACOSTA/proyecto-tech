import React from "react";
import { Accordion} from "react-bootstrap";

import { Link } from "react-router-dom";

function CassCard({ classInfo, eventKey }) {
  
    /**! ESTUIAR!! */
  
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
        <div class="inline-flex mt-4 mx-2">
          <Link
            type="button"
            className="bg-blue-600 text-white font-regular py-2 px-3  rounded hover:scale-95 justify-center no-underline mx-2"
            to={"/usuarios"}
          >
            Ingresar
          </Link>
          <div className="flex flex-row">
          <div className="flex flex-col justify-center text-center items-center ">
            
          </div>
          <div className="flex flex-col justify-center">
            <Link
              type="button"
              className="btn btn-outline-none"
              to={"/asistencia"}
            >
              <strong className="underline text-red-600">Asistencia</strong>
            </Link>
          </div>
        </div>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default CassCard;
