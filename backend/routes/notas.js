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

router.get('/', (req, res) => {
    const query = `
        SELECT notas.*, usuarios.DOCUMENTO, usuarios.NOMBRES
        FROM notas
        JOIN usuarios ON notas.ID_USUARIO = usuarios.ID_USUARIO
    `;
    console.log('aqui llego');

  db.query(query, (err, results) => {
        if (!err) {
            // Devuelve los resultados en formato JSON si no hay error
            return res.status(200).json({ results });
        } else {
            // Devuelve un código de estado 500 y el error si hay algún problema con la consulta
            return res.status(500).json(err);
        }
    });  
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM NOTAS WHERE ID_CALIFICACION = ?";
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
  

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { NOTA1, NOTA2, NOTA3 } = req.body;
    console.log(req.body);
    db.query(
        'UPDATE notas SET NOTA1 = ?, NOTA2 = ?, NOTA3 = ? WHERE ID_CALIFICACION = ?',
        [NOTA1, NOTA2, NOTA3, id],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.sendStatus(204); // Assuming successful update, send status 204 (No Content)
        }
    );
});

module.exports = router;
