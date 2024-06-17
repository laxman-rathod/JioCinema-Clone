import bcrypt from "bcryptjs";
import usersSchema from "../../schema/users_auth/usersSchema.js";
import asyncHandler from "../../middlewares/asyncHandler.js";
import generateToken from "../../util/generateToken.js";

const registerUser = asyncHandler(async (req, res, next) => {
  const { username, email, mobileNumber, password } = req.body;
  if (!username || !email || !mobileNumber || !password) {
    throw new Error("Please full all the fields");
  }

  const userExist = await usersSchema.findOne({ mobileNumber }).lean();
  if (userExist) res.status(400).send("User already exists! Please log in.");

  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new usersSchema({
    username,
    email,
    mobileNumber,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    generateToken(res, newUser._id);
    res.status(200).json({
      success: true,
      msg: "Sign up successful",
      username: newUser._id,
      mobileNumber: newUser.mobileNumber,
      email: newUser.email,
      password: newUser.password,
    });
  } catch (error) {
    next(error);
  }
});

const loginUser = asyncHandler(async (req, res, next) => {
  const { mobileNumber, password } = req.body;
  if (!mobileNumber || !password) {
    return res
      .status(400)
      .json({ msg: "Please provide mobile number and password" });
  }

  try {
    const user = await usersSchema.findOne({ mobileNumber });
    if (!user) {
      return res.status(401).json({ msg: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid Credentials" });
    }

    generateToken(res, user._id);
    res.status(200).json({
      success: true,
      msg: "Login successful",
      id: user._id,
      username: user.username,
      mobileNumber: user.mobileNumber,
      email: user.email,
    });
  } catch (error) {
    res.status(500).send("Server error");
  }
});

const loggoutUser = asyncHandler(async (req, res, next) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ success: true, message: "Logged out successfully" });
});

const getCurrentUserProfile = asyncHandler(async (req, res, next) => {
  const user = await usersSchema.findById(req.user._id);
  if (user) {
    res.json({
      success: true,
      id: user._id,
      username: user.username,
      email: user.email,
      mobileNumber: user.mobileNumber,
    });
  } else {
    res.status(404).json({ message: "User not found." });
  }
});

const updateCurrentUserProfile = asyncHandler(async (req, res) => {
  const user = await usersSchema.findById(req.user._id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.mobileNumber = req.body.mobileNumber || user.mobileNumber;

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      user.password = hashedPassword;
    }

    const updatedUser = await user.save();

    res.json({
      success: true,
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      mobileNumber: updatedUser.mobileNumber,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export {
  registerUser,
  loginUser,
  loggoutUser,
  getCurrentUserProfile,
  updateCurrentUserProfile,
};
