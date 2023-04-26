import { NextFunction, Request, Response } from "express"
import { User } from "../entities"
const existUser = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const username = req.body.username;
            const email = req.body.email;
            const existUser = await User.find({ $or: [{ username }, { email }] })
            if (existUser) throw new Error("User already exists.")
            next()
        } catch (error) {
            return res.status(500).json({
                error,
            })
        }
    }
}

export default existUser;
