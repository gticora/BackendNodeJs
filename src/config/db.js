const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb+srv://gaticora:TNR0OV8e98nl98uw@cluster0.ocrgk.mongodb.net/RegistroPersonas?retryWrites=true&w=majority';
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a MongoDB exitosa');
  } catch (error) {
    console.error('Error conectando a MongoDB:', error);
    process.exit(1); // Finaliza la aplicación si no se puede conectar
  }
};

module.exports = connectDB;
