// routes/applicationRoutes.js (ESM)
import express from "express";
import {
  applyToJob,
  getMyApplications,
  getApplicantsForJob,
  getApplicationById,
  updateStatus,
} from "../controllers/applicationController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/:jobId", protect, applyToJob);
router.get("/my", protect, getMyApplications);
router.get("/job/:jobId", protect, getApplicantsForJob);
router.get("/:id", protect, getApplicationById);
router.put("/:id/status", protect, updateStatus);

export default router;
