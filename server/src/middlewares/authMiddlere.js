import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import usersSchema from "../schema/users_auth/usersSchema.js";

// check if the user is authenticated or not.
const authenticate = asyncHandler(async (req, res, next) => {
  const token = req.cookies.jwt; // read the token from the jwt cookie
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await usersSchema.findById(decoded.userId).select("-password");

      if (!req.user) {
        res.status(401);
        throw new Error("User not found, authorization denied");
      }
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token faild!");
    }
  } else {
    res.status(401);
    throw new Error("No token, authorization denied");
  }
});

export { authenticate };
