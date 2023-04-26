import { Router } from "express";
import { createUserController, loginController } from "../controllers/user";
import { body } from "express-validator";
import { validator, login, existUser } from "../middlewares";

const router = Router();

router.post("/signup", [
    body(["name", "password", "username", "email"]).notEmpty(),
    validator,
    existUser,
], createUserController);

router.post("/login", [
    body(["password", "username", "email"]).notEmpty(),
    validator,
    login,
], loginController)

export default router;
