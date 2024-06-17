import mongoose from "mongoose";

const users = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

const usersSchema = mongoose.model("User Authentication", users);
export default usersSchema;
