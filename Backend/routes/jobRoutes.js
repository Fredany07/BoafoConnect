// routes/jobRoutes.js (ESM)
import express from "express";
import {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
  toggleCloseJob,
  getJobsEmployer,
} from "../controllers/jobControllers.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/")
  .post(protect, createJob)
  .get(getJobs);

router.route("/get-jobs-employer")
  .get(protect, getJobsEmployer);

router.route("/:id")
  .get(getJobById)
  .put(protect, updateJob)
  .delete(protect, deleteJob);

router.put("/:id/toggle-close", protect, toggleCloseJob);

export default router;
