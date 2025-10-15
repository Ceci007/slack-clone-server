import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.MONGO_URI);

    console.log("Mongo DB connected successfully", conn.connection.host);
  } catch(error) {
    console.log("Error connecting to mongo DB", error);
    process.exit(1);
  }
}