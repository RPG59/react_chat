import React from 'react';
import { Sidebar } from "../components";
import ChatArea from "../components/chat-area/chat-area.container";

const Chat = props => {
    return (
        <div className='chat'>
            <Sidebar/>
            <ChatArea/>
        </div>
    )

};

export default Chat;
