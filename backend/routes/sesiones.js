const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  uri: "mysql://talento2_hopetoldso:fd95197cfa31282166d71e64a844619d8bbfe906@fmf.h.filess.io:3307/talento2_hopetoldso",
});

// Obtener todos los usuarios
router.get('/', (req, res) => {
    db.query('SELECT * FROM sesiones', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});


router.get('/:id', (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM sesiones WHERE ID_SESIONES = ?";
    db.query(query, [id], (err, results) => {
      if (!err) {
        if (results.length > 0) {
          return res.status(200).json(results[0]);
        } else {
          return res.status(404).json({ message: "Sesion no encontrada" });
        }
      } else {
        return res.status(500).json(err);
      }
    });
  });



// Crear un nuevo usuario
router.post('/', (req, res) => {
    const { NUMERO_SESION, FECHA, COMPONENTE, HORARIO, ESTADO , CURSO , NIVEL , LINK } = req.body;
    db.query(
        'INSERT INTO sesiones (NUMERO_SESION, FECHA, COMPONENTE, HORARIO , ESTADO, CURSO, NIVEL , LINK) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [NUMERO_SESION, FECHA, COMPONENTE, HORARIO, ESTADO, CURSO, NIVEL, LINK],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            const idUsuario = results.insertId;
            res.sendStatus(204);
        }
    );
});


// Actualizar un usuario
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {  NUMERO_SESION, FECHA, COMPONENTE, HORARIO , CURSO , NIVEL , LINK } = req.body;
    db.query(
        'UPDATE sesiones SET NUMERO_SESION = ?, FECHA = ?, COMPONENTE = ?, HORARIO = ?, CURSO = ?, NIVEL= ?, LINK  = ? WHERE ID_SESIONES = ?',
        [ NUMERO_SESION, FECHA, COMPONENTE, HORARIO , CURSO , NIVEL , LINK , id],
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
    db.query('DELETE FROM sesiones WHERE ID_SESIONES = ?', [id], (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.sendStatus(204);
    });
});

module.exports = router;
