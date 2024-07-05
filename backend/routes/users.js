const express = require('express');
const router = express.Router();
const db = require("../db.js");

// Obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM usuarios');
        return res.json(results);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const query = "SELECT * FROM usuarios WHERE Id_Usuario = ?";
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



// Crear un nuevo usuario
router.post('/', async (req, res) => {
    try {
        const { NOMBRES, CONTRASENA, EMAIL, TIPO_ROL, DOCUMENTO, TELEFONO, PROGRAMA } = req.body;
        await db.query(
            'INSERT INTO usuarios (NOMBRES, CONTRASENA, EMAIL, TIPO_ROL, DOCUMENTO, TELEFONO, PROGRAMA) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [NOMBRES, CONTRASENA, EMAIL, TIPO_ROL, DOCUMENTO, TELEFONO, PROGRAMA]);

        const idUsuario = results.insertId;
        // Insertar las notas iniciales en ceros
        await db.query(
            'INSERT INTO notas (ID_USUARIO, NOTA1, NOTA2, NOTA3) VALUES (?, 0, 0, 0)',
            [idUsuario])

        return res.status(201).json({ id: idUsuario });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error });
    }
});


// Actualizar un usuario
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { NOMBRES, CONTRASENA, EMAIL, TIPO_ROL, DOCUMENTO, TELEFONO, PROGRAMA } = req.body;
        await db.query(
            'UPDATE usuarios SET NOMBRES = ?, CONTRASENA = ?, EMAIL = ?, TIPO_ROL = ?, DOCUMENTO = ?, TELEFONO = ?, PROGRAMA = ? WHERE ID_USUARIO = ?',
            [NOMBRES, CONTRASENA, EMAIL, TIPO_ROL, DOCUMENTO, TELEFONO, PROGRAMA, id]);

        res.sendStatus(204);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error });
    }
});

// Eliminar un usuario
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await db.query('DELETE FROM usuarios WHERE ID_USUARIO = ?', [id])
        res.sendStatus(204);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: err.message });
    }
});

module.exports = router;
