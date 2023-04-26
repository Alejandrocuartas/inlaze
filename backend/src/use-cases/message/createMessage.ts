import { Types } from "mongoose";
import { Message } from "../../entities";

const createMessage = (title: string, text: string, user: string) => {
    const newMessage = new Message({
        title,
        text,
        user: new Types.ObjectId(user),
        date: new Date()
    })
    return newMessage.save()
}

export default createMessage;
