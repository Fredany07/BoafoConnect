
import express from "express";
import protect from "../middlewares/authMiddleware.js";
import {
  saveJob,
  unsaveJob,
  getMySavedJobs,
} from "../controllers/savedJobsController.js";

const router = express.Router();

router.post("/:jobId", protect, saveJob);
router.delete("/:jobId", protect, unsaveJob);
router.get("/my", protect, getMySavedJobs);

export default router;
