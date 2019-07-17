import React from 'react';
import ChatMessage from "./chat-message";

import './chat-area.sass'

const ChatAreaView = props => {
    const {messages, currentUser, otherUser} = props;

    return (
        <div className="chat-area">
            {Array.isArray(messages) ? messages.map((message, i) => {
                const isOwnMessage = otherUser === null || message.userId === currentUser.userId;
                return (
                    <ChatMessage
                        key={i}
                        message={message}
                        avatar={isOwnMessage ? currentUser.avatar : otherUser.avatar}
                        username={isOwnMessage ? currentUser.username : otherUser.username}
                        isOwnMessage={isOwnMessage}
                    />)
            }) : (<p>No Messages</p>)
            }
        </div>
    )
};

export default ChatAreaView;
