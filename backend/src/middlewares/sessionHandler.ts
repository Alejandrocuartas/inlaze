import { NextFunction, Request, Response } from "express"

const jwt = require('jsonwebtoken')

const sessionHandler = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(401).json({
            message: 'User is not logged'
        })
    }
    try {
        const { id } = jwt.verify(token, process.env.JWT_KEY)
        req.body.userId = id
        next()
    } catch (error) {
        return res.status(401).json({
            message: 'Unvalid user token',
            error,
        })
    }
}

export default sessionHandler;
