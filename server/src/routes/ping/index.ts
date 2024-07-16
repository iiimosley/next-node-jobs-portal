import { Router } from "express";
import { PingController } from "../../controllers/ping.controller";

const router = Router();
const controller = new PingController();

router.use("/ping", controller.ping);

export default router;
