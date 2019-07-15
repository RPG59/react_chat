import React from 'react';
import ChatListView from "./chat-list.view";
import { connect } from "react-redux";

const ChatList = props => {

    return <ChatListView {...props}/>
};

export default connect(props => ({
    chats: props.chats
}))(ChatList);
