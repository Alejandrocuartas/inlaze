import { Types } from "mongoose";

export type UserType = {
    _id: Types.ObjectId;
    name: string;
    username: string;
    password: string;
    email: string;
}

export type MessageType = {
    id: Types.ObjectId;
    date: Date;
    title: string;
    text: string;
    user: UserType;
}
