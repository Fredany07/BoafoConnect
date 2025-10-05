import express from "express";
import { register, login, getMe } from "../controllers/authController.js";
import protect from "../middlewares/authMiddleware.js";
import multer from "multer";
import path from "path";

const router = express.Router();

// Multer storage for uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Auth routes
router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getMe);

// Upload avatar
router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });
  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
  res.status(200).json({ imageUrl });
});

// Upload resume
router.post("/upload-resume", upload.single("resume"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });
  const resumeUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
  res.status(200).json({ resumeUrl });
});

export default router;
