import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
const teamSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
teamSchema.methos.passCheck = async function (password) {
  return await bcrypt.compare(password, this.password);
};
teamSchema.methos.genadminAccessToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
    },
    process.env.ADMIN_ACCESS_TOKEN,
    {
      expiresIn: "3h",
    }
  );
};
export const TeamLogin = mongoose.model("TeamLogin", teamSchema);
