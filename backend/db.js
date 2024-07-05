const mysql = require("mysql2");

// Crear el pool de conexiones
const pool = mysql.createPool({
  connectionLimit: 10,
  typeCast: true,
  uri: "mysql://talento2_hopetoldso:fd95197cfa31282166d71e64a844619d8bbfe906@fmf.h.filess.io:3307/talento2_hopetoldso",
});

// Manejar evento de conexión exitosa
pool
  .getConnection()
  .then((connection) => {
    console.log("Conexión a la base de datos establecida correctamente");
    connection.release(); // Liberar la conexión después de comprobarla
  })
  .catch((error) => {
    console.error("Error al conectar con la base de datos:", error);
    process.exit(1); // Salir del proceso Node.js con código de error 1
  });

module.exports = pool;
