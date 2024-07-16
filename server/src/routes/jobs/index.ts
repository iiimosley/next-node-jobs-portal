import { Router } from "express";
import { JobController } from "../../controllers/job.controller";

const router = Router();
const jobsController = new JobController();

router.get("/jobs", jobsController.getJobs);
router.get("/jobs/upcoming", jobsController.getUpcomingJobs);

export default router;
