require('dotenv').config();
const connectDB = require('./src/config/db');
const app = require('./src/app');

// Conecta a la base de datos
connectDB();

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
