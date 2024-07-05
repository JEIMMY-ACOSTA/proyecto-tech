const express = require("express");
const router = express.Router();
const db = require("../db.js");

router.get("/", async (req, res) => {
  try {
    const query = `
          SELECT notas.*, usuarios.DOCUMENTO, usuarios.NOMBRES
          FROM notas
          JOIN usuarios ON notas.ID_USUARIO = usuarios.ID_USUARIO
      `;
    const [results] = await db.query(query);
    // Devuelve los resultados en formato JSON si no hay error
    return res.status(200).json({ results });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const query = "SELECT * FROM NOTAS WHERE ID_CALIFICACION = ?";
    const [results] = await db.query(query, [id]);

    if (results.length > 0) {
      return res.status(200).json(results[0]);
    } else {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { NOTA1, NOTA2, NOTA3 } = req.body;
    await db.query(
      "UPDATE notas SET NOTA1 = ?, NOTA2 = ?, NOTA3 = ? WHERE ID_CALIFICACION = ?",
      [NOTA1, NOTA2, NOTA3, id]
    );
    res.sendStatus(204); // Assuming successful update, send status 204 (No Content)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

module.exports = router;
