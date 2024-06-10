import express from "express";
import {
  loginUser,
  registerUser,
  loggoutUser,
  getCurrentUserProfile,
  updateCurrentUserProfile,
} from "../../subscribers/users_auth/userHandle.js";
import { authenticate } from "../../middlewares/authMiddlere.js";

const router = express.Router();

// routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", loggoutUser);
router
  .route("/profile")
  .get(authenticate, getCurrentUserProfile)
  .put(authenticate, updateCurrentUserProfile);

export default router;
