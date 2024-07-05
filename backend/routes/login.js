const express = require("express");
const router = express.Router();

const db = require("../db.js");

// Ruta para manejar el inicio de sesión
router.post("/", async (req, res) => {
  try {
    const { EMAIL, CONTRASENA } = req.body;
    const query =
      "SELECT ID_USUARIO, EMAIL, NOMBRES, TIPO_ROL FROM usuarios WHERE EMAIL = ? AND CONTRASENA = ?";
    const [results] = await db.query(query, [EMAIL, CONTRASENA]);
    if (results.length > 0) {
      // Usuario autenticado correctamente
      const user = results[0]; // Supongamos que los datos del usuario están en la primera fila de results
      return res.status(200).json({
        message: "Login successful",
        data: {
          ID_USUARIO: user.ID_USUARIO,
          EMAIL: user.EMAIL,
          NOMBRES: user.NOMBRES,
          TIPO_ROL: user.TIPO_ROL,
        },
      });
    } else {
      // Credenciales incorrectas
      console.log(
        "Credenciales incorrectas. Email:",
        EMAIL,
        "Password:",
        CONTRASENA
      );
      return res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

module.exports = router;
