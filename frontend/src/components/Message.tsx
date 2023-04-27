import React from "react";

import "./styles/Message.css";
import { MessageType } from "../types";

const Message = ({ message }: { message: MessageType }) => {
    return (
        <div className="container">
            <div className="card">
                <div className="card__body">
                    <h4>{message.title || "Title"}</h4>
                    <p>{message.text || "Lorema ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!"}</p>
                </div>
                <div className="card__footer">
                    <div className="date">
                        <small>{message.date.split("T")[0] || "date"}</small>
                        <small>{message.date.split("T")[1].split(".")[0] || "time"}</small>
                    </div>
                    <div className="user">
                        <div className="user__info">
                            <h5>{message.user.name || "author"}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message;