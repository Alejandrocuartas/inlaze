import { Message } from "../../entities";
import { MessageType } from "../../types";

const getMessages = async (): Promise<MessageType[]> => {
    return Message.find().populate("user")
}

export default getMessages;
