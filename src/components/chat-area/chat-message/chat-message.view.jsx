import React from 'react';

const ChatMessageView = props => {
    const {message, avatar, username, isOwnMessage} = props;

    return (
        <div className="chat-message">
            <div className="user-info">
                <img src={avatar} alt="user-avatar"/>
                <div className="user-name">{username}</div>
            </div>
            <div className="message-content">
                <div className="messages-text">{message.text}</div>
            </div>
        </div>
    )
};

export default ChatMessageView;

