import { NextFunction, Request, Response } from "express"
import { User } from "../entities"
const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, email } = req.body;
        const existUser = await User.findOne({ $or: [{ username }, { email }] })
        if (!existUser) return res.status(404).json({ message: 'User not found' });
        req.body.user = existUser;
        next()
    } catch (error) {
        return res.status(500).json({
            error,
        })
    }
}

export default login;
