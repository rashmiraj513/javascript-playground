require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  const remoteConnection = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB Connected: ${remoteConnection.connection.host}...`);
};

mongoose.set('strictQuery', true);

module.exports = connectDB;
