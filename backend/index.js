// // backend/index.js
// const express = require("express");
// const cors = require("cors");
// const mysql = require("mysql2");
// const app = express();
// const port = 3001;

// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "talento1",
// });

// db.connect((err) => {
//   if (err) {
//     console.error("Error connecting to the database:", err);
//     return;
//   }
//   console.log("Connected to the MySQL database.");
// });

// app.get("/api/test", (req, res) => {
//   res.send("API funcionando correctamente");
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

// backend/index.js
// backend/index.js

// --const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const usersRouter = require('./routes/users');

// const app = express();
// const port = 3001;

// app.use(cors());
// app.use(bodyParser.json());

// app.use('/api/users', usersRouter);

// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });


//integrar componentes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login'); // Importar el módulo login.js
const notasRouter = require('./routes/notas'); // Importar el módulo login.js
const sesionesRouter = require('./routes/sesiones');

require("dotenv").config();
const app = express();


app.use(
  cors({
    origin: process.env.URI_FRONTEND,
    credentials: true
  })
);
app.use(bodyParser.json());

app.use('/api/users', usersRouter); // Rutas para usuarios
app.use('/api/login', loginRouter); // Rutas para iniciar sesión
app.use('/api/notas', notasRouter); // Rutas para iniciar sesión
app.use('/api/sesiones', sesionesRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
    
});

