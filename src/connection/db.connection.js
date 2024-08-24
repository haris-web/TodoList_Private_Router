import mongoose from "mongoose";
import chalk from "chalk";
import dotenv from 'dotenv';
dotenv.config();

const dbPath = process.env.MONGODB_URI
async function dbConnection() {
  try {
    await mongoose.connect(dbPath, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(chalk.green("> Successfully connected to the database"));
  } catch (err) {
    console.log(chalk.red("The error occurred:", err.message));
  }
}

export default dbConnection;