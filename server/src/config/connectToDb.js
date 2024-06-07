import mongoose from "mongoose";

// connect to DB
const connectToDB = async (conUrl) => {
  try {
    await mongoose.connect(conUrl);
    console.log("MongoDB connected..");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
