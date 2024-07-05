const express = require("express");
const router = express.Router();

const db = require("../db.js");

// Ruta para manejar el inicio de sesión
router.post("/", async (req, res) => {
  try {
    const { EMAIL, CONTRASENA } = req.body;
    const query =
      "SELECT Id_Usuario, Email, Nombres, Tipo_Rol FROM Usuarios WHERE Email = ? AND contrasena = ?";
    const [results] = await db.query(query, [EMAIL, CONTRASENA]);
    if (results.length > 0) {
      // Usuario autenticado correctamente
      const user = results[0]; // Supongamos que los datos del usuario están en la primera fila de results
      return res.status(200).json({
        message: "Login successful",
        data: {
          Id_Usuario: user.Id_Usuario,
          Email: user.Email,
          Nombres: user.Nombres,
          Tipo_Rol: user.Tipo_Rol,
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
