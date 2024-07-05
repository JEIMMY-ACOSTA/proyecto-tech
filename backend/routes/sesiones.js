const express = require("express");
const router = express.Router();
const db = require("../db.js");

// Obtener todos los usuarios
router.get("/", async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM sesiones");
    return res.json(results);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const query = "SELECT * FROM sesiones WHERE ID_SESIONES = ?";
    const [results] = await db.query(query, [id]);
    if (results.length > 0) {
      return res.status(200).json(results[0]);
    } else {
      return res.status(404).json({ message: "Sesion no encontrada" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

// Crear un nuevo usuario
router.post("/", async (req, res) => {
  try {
    const {
      NUMERO_SESION,
      FECHA,
      COMPONENTE,
      HORARIO,
      ESTADO,
      CURSO,
      NIVEL,
      LINK,
    } = req.body;
    const [results] = await db.query(
      "INSERT INTO sesiones (NUMERO_SESION, FECHA, COMPONENTE, HORARIO , ESTADO, CURSO, NIVEL , LINK) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [NUMERO_SESION, FECHA, COMPONENTE, HORARIO, ESTADO, CURSO, NIVEL, LINK]
    );
    const idUsuario = results.insertId;
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

// Actualizar un usuario
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { NUMERO_SESION, FECHA, COMPONENTE, HORARIO, CURSO, NIVEL, LINK } =
      req.body;
    const [results] = await db.query(
      "UPDATE sesiones SET NUMERO_SESION = ?, FECHA = ?, COMPONENTE = ?, HORARIO = ?, CURSO = ?, NIVEL= ?, LINK  = ? WHERE ID_SESIONES = ?",
      [NUMERO_SESION, FECHA, COMPONENTE, HORARIO, CURSO, NIVEL, LINK, id]
    );
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

// Eliminar un usuario
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [results] = await db.query(
      "DELETE FROM sesiones WHERE ID_SESIONES = ?",
      [id]
    );
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

module.exports = router;
