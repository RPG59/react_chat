import React from 'react';
import TopBar from "./top-bar";
import ChatList from "./chat-list/chat-list.container";

const SidebarView = props => {

    return (
        <div className="sidebar">
            <TopBar/>
            <ChatList/>
        </div>
    )
};

export default SidebarView;
