import React, { useEffect, useState } from 'react';
import ChatAreaView from "./chat-area.view";
import { connect } from "react-redux";
import { HttpService } from "../../services/http.service";

const ChatArea = props => {
    const {currentUser, chatData} = props;
    const [otherUser, setOtherUser] = useState(null);
    const [isLoading, setLoadingStatus] = useState(false);

    useEffect(() => {
        const {currentUser, chatData} = props;
        const currentUserId = currentUser.userId;
        const otherUserMessage = chatData.messages.find(message => message.userId !== currentUserId);
        if (otherUserMessage && otherUserMessage.userId && otherUser === null) {
            setLoadingStatus(true);
            HttpService.fetchUser(otherUserMessage.userId).then(user => {
                setLoadingStatus(false);
                setOtherUser(user);
            });
        }
    }, [props]);


    if (isLoading) {
        return <div>Loading ...</div>
    }

    return <ChatAreaView currentUser={currentUser} otherUser={otherUser} messages={chatData.messages}/>;

};

export default connect(props => ({
    currentUser: props.user,
    chatData: props.messages
}))(ChatArea);
