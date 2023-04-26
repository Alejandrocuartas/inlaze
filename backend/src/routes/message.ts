import { Router } from "express";
import { createMessageController, getMessagesController } from "../controllers/message";
import { body } from "express-validator";
import { sessionHandler, validator } from "../middlewares";
const router = Router();

router.post("/create", [
    body(["title", "text"]).notEmpty(),
    validator,
    sessionHandler,
], createMessageController);

router.get("/", [
    sessionHandler,
], getMessagesController);

export default router;