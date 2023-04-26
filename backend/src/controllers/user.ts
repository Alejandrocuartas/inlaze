import { Request, Response } from "express";
import { signup } from "../use-cases";
import jwtGenerator from "../helpers/jwtGenerator";
import encryptPassword from "../helpers/encryptPass";

const createUserController = async (req: Request, res: Response) => {
    try {
        const { name, username, email, password } = req.body;
        const hash = encryptPassword(password);
        const user = await signup(name, username, email, hash);
        const jwt = await jwtGenerator(user.username)
        return res.setHeader("Authorization", jwt).status(200).json({ user });
    } catch (error) {
        return res.status(500).json({ error });
    }
}

export {
    createUserController,
}
