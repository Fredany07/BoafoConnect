// routes/analyticsRoutes.js (ESM)
import express from "express";
import  protect from "../middlewares/authMiddleware.js";
import getEmployerAnalytics from "../controllers/analyticsController.js";

const router = express.Router();

router.get("/overview", protect, getEmployerAnalytics);

export default router;
