import { Request, Response } from "express";
import { signup } from "../use-cases";
import jwtGenerator from "../helpers/jwtGenerator";
import encryptPassword from "../helpers/encryptPass";
import checkPass from "../helpers/checkPassword";

const createUserController = async (req: Request, res: Response) => {
    try {
        const { name, username, email, password } = req.body;
        const hash = encryptPassword(password);
        const user = await signup(name, username, email, hash);
        const jwt = await jwtGenerator(user._id.toString())
        return res.setHeader("Authorization", jwt).status(200).json({ user, jwt });
    } catch (error) {
        return res.status(500).json({ error });
    }
}

const loginController = async (req: Request, res: Response) => {
    try {
        const { password } = req.body;
        const { name, username, email, _id } = req.body.user;
        const userPass = req.body.user.password;
        const isCorrectPass = checkPass(password, userPass);
        if (!isCorrectPass) return res.status(404).json({ message: "incorrect password" });
        const jwt = await jwtGenerator(_id.toString())
        return res.setHeader("Authorization", jwt).status(200).json({
            username,
            name,
            email,
            _id,
            jwt,
        });
    } catch (error) {
        return res.status(500).json({ error });
    }
}

export {
    createUserController,
    loginController,
}
