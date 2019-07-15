import React from 'react';
import ChatItem from "./chat-item/chat-item.container";

const ChatListView = props => {
    const {chats} = props;

    if (Array.isArray(chats)) {
        return (
            <div className="chat-list">
                {chats.map((chat, i) => (
                    <ChatItem key={i} avatar={chat.avatar} name={chat.name} chatId={chat.chatId}/>))}
            </div>
        )
    } else {
        return (
            <div className="chat-list">No active chats</div>
        )
    }
};

export default ChatListView;
