import { Router } from "express";
import { createDayController, updateTipsController, enterMissedEController, clearCountsController } from "../controllers/day";
const router = Router();

router.post("/create", createDayController);
router.patch("/tips", updateTipsController);
router.post("/missed", enterMissedEController);
router.patch("/clear", clearCountsController)

export default router;