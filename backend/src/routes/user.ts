import { Router } from "express";
import { createUserController, loginController } from "../controllers/user";
import { body } from "express-validator";
import { validator, login } from "../middlewares";

const router = Router();

router.post("/signup", [
    body(["name", "password", "username", "email"]),
    validator,
], createUserController);

router.post("/login", [
    body(["password", "username", "email"]),
    login,
    validator,
], loginController)

export default router;