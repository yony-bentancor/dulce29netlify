const CLAVE_SECRETA =
  process.env.CLAVE_SECRETA || "dulce29"; /* "lunes23deagosto"; */

const PORT = process.env.PORT || 80; /* 3001 */

const DB_CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING ||
  "mongodb+srv://proyectodulce:<password>@cluster0.bi9aze0.mongodb.net/?retryWrites=true&w=majority"; /* "mongodb://localhost/proyecto" */

const uri =
  "mongodb+srv://proyectodulce:<password>@cluster0.bi9aze0.mongodb.net/?retryWrites=true&w=majority";

const HOST = "https://dulce29.netlify.app/";
/* "http://localhost";
 */
module.exports = {
  CLAVE_SECRETA,
  PORT,
  DB_CONNECTION_STRING,
  HOST,
  uri,
};
