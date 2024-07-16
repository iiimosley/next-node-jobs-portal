import { Router } from "express";
import JobRouter from "./jobs";
import PingRouter from "./ping";

const router = Router();
router.use(PingRouter);
router.use(JobRouter);

export default router;
