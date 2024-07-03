const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'talento2'
});

// Obtener todos los usuarios
router.get('/', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});


router.get('/:id', (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM USUARIOS WHERE Id_Usuario = ?";
    db.query(query, [id], (err, results) => {
      if (!err) {
        if (results.length > 0) {
          return res.status(200).json(results[0]);
        } else {
          return res.status(404).json({ message: "Usuario no encontrado" });
        }
      } else {
        return res.status(500).json(err);
      }
    });
  });



// Crear un nuevo usuario
router.post('/', (req, res) => {
    const { NOMBRES, CONTRASENA, EMAIL, TIPO_ROL, DOCUMENTO, TELEFONO, PROGRAMA } = req.body;
    db.query(
        'INSERT INTO usuarios (NOMBRES, CONTRASENA, EMAIL, TIPO_ROL, DOCUMENTO, TELEFONO, PROGRAMA) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [NOMBRES, CONTRASENA, EMAIL, TIPO_ROL, DOCUMENTO, TELEFONO, PROGRAMA],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ id: results.insertId });
        }
    );
});

// Actualizar un usuario
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { NOMBRES, CONTRASENA, EMAIL, TIPO_ROL, DOCUMENTO, TELEFONO, PROGRAMA } = req.body;
    db.query(
        'UPDATE usuarios SET NOMBRES = ?, CONTRASENA = ?, EMAIL = ?, TIPO_ROL = ?, DOCUMENTO = ?, TELEFONO = ?, PROGRAMA = ? WHERE ID_USUARIO = ?',
        [NOMBRES, CONTRASENA, EMAIL, TIPO_ROL, DOCUMENTO, TELEFONO, PROGRAMA, id],
        (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.sendStatus(204);
        }
    );
});

// Eliminar un usuario
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM usuarios WHERE ID_USUARIO = ?', [id], (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.sendStatus(204);
    });
});

module.exports = router;
