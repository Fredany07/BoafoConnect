// routes/userRoutes.js (ESM)
import express from "express";
import {
  updateProfile,
  deleteResume,
  getPublicProfile,
  uploadResume,
} from "../controllers/userController.js";
import protect from "../middlewares/authMiddleware.js";
import upload from "../middlewares/uploadMiddleware.js";

const router = express.Router();

// Protected routes
router.put("/profile", protect, updateProfile);
router.delete("/resume", protect, deleteResume);
router.post("/upload-resume", protect, upload.single("resume"), uploadResume);

// Public route
router.get("/:id", getPublicProfile);

export default router;
