const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    uri: "mysql://talento2_hopetoldso:fd95197cfa31282166d71e64a844619d8bbfe906@fmf.h.filess.io:3307/talento2_hopetoldso"
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
            const idUsuario = results.insertId;

            // Insertar las notas iniciales en ceros
            db.query(
                'INSERT INTO notas (ID_USUARIO, NOTA1, NOTA2, NOTA3) VALUES (?, 0, 0, 0)',
                [idUsuario],
                (err2) => {
                    if (err2) {
                        return res.status(500).json({ error: err2.message });
                    }
                    res.status(201).json({ id: idUsuario });
                }
            );
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
