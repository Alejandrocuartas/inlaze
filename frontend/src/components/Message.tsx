import React from "react";

import "./styles/Message.css";

const Message = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="card__body">
                    <h4>Race to your heart content</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                </div>
                <div className="card__footer">
                    <div className="date">
                        <small>2d ago</small>
                    </div>
                    <div className="user">
                        <div className="user__info">
                            <h5>John Doe</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message;