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



const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', usersRouter); // Rutas para usuarios
app.use('/api/login', loginRouter); // Rutas para iniciar sesión


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

