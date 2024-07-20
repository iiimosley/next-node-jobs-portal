import { Router } from "express";
import { JobController } from "../../controllers/job.controller";
import { validateGetJobRequest } from "../../middleware/validateGetJobRequest";

const router = Router();
const { getJobs, getUpcomingJobs, getJobById } = new JobController();

router.get("/jobs", getJobs);
router.get("/jobs/upcoming", getUpcomingJobs);
router.get("/jobs/:id", validateGetJobRequest, getJobById);

export default router;
