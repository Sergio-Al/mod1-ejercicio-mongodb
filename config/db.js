const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewURlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB conectado a la base de datos");

  } catch (error) {
    console.error("Error al conectar a MongoDB", error);
    process.exit(1); // Sale del proceso si hay un error
  }
};

module.exports = connectDB;
