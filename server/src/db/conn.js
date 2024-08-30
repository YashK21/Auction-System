import mongoose from "mongoose";
import { DB_NAME } from "../utils/constant.js";
const connDB = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URI_PROD}/${DB_NAME}`);
    console.log(`DB Connected`);
  } catch (error) {
    console.error("Error! while connecting to DB", error);
    process.exit(1);
  }
};
export default connDB;
