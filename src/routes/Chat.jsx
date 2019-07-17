import React from 'react';
import { Sidebar } from "../components";
import ChatArea from "../components/chat-area/chat-area.container";

import './Chat.sass'
import InputMessage from "../components/chat-area/input-message";

const Chat = props => {
    return (
        <div className='chat'>
            <Sidebar/>
            <div className="chat-area-container">
                <ChatArea/>
                <InputMessage/>
            </div>
        </div>
    )

};

export default Chat;
