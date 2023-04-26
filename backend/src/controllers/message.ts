import { Request, Response } from "express";
import { createMessage, getMessages } from "../use-cases";

const createMessageController = async (req: Request, res: Response) => {
    try {
        const { userId, title, text } = req.body;
        const message = await createMessage(title, text, userId)
        return res.status(200).json({ message })
    } catch (error) {
        return res.status(500).json({ error });
    }
}

const getMessagesController = async (req: Request, res: Response) => {
    try {
        const messages = await getMessages()
        return res.status(200).json({ messages });
    } catch (error) {
        return res.status(500).json({ error });
    }
}

export {
    createMessageController,
    getMessagesController,
}