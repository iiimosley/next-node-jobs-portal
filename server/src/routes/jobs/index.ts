import { Router } from "express";
import { JobController } from "../../controllers/job.controller";

const router = Router();
const { getJobs, getUpcomingJobs, getJobById} = new JobController();

router.get("/jobs", getJobs);
router.get("/jobs/upcoming", getUpcomingJobs);
router.get("/jobs/:id", getJobById);

export default router;
