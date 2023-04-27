import { NextFunction, Request, Response } from "express"
import { User } from "../entities"
const existUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const username = req.body.username;
        const email = req.body.email;
        const existUser = await User.findOne({ $or: [{ username }, { email }] })
        if (existUser) return res.status(400).json({ message: 'User already exists' })
        next()
    } catch (error) {
        return res.status(500).json({
            error,
        })
    }
}

export default existUser;
