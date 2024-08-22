import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const  AuthUser= mongoose.model("Users", userSchema);

export default AuthUser;
