import dotenv from "dotenv";

dotenv.config();

export default{
  port: process.env.PORT || 3000,
  db: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000",
};