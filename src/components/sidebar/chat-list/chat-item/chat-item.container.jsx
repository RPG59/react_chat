import React from 'react';
import ChatItemView from "./chat-item.view";
import { connect } from "react-redux";
import { Actions } from "../../../../redux/actions";

const ChatItem = props => {
    const {chatId, fetchMessages} = props;

    const onClick = () => {
        fetchMessages(chatId);
    };

    return <ChatItemView {...props} clickCallback={onClick}/>
};

export default connect(null, {fetchMessages: Actions.fetchMessages})(ChatItem);

