const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected to: ${conn.connection.name}`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
