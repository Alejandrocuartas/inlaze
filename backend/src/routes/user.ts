import { Router } from "express";
import { createUserController } from "../controllers/user";
import { body } from "express-validator";
import { validator } from "../middlewares";

const router = Router();

router.post("/signup", [
    body(["name", "password", "username", "email"]),
    validator
], createUserController);

export default router;