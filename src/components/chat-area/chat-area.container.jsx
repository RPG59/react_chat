import React from 'react';
import ChatAreaView from "./chat-area.view";
import { connect } from "react-redux";
import { HttpService } from "../../services/http.service";

class ChatArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            otherUser: null
        };
        this.isLoading = false;

    }

    componentWillReceiveProps(nextProps) {
        const {currentUser, chatData} = nextProps;
        const currentUserId = currentUser.userId;
        const otherUserMessage = chatData.messages.find(message => message.userId !== currentUserId);
        if (otherUserMessage && otherUserMessage.userId && this.state.otherUser === null) {
            this.isLoading = true;
            HttpService.fetchUser(otherUserMessage.userId).then(user => {
                this.isLoading = false;
                this.setState({otherUser: user});
            });
        }
    }


    render() {
        const {currentUser, chatData} = this.props;
        if (this.isLoading) {
            return <div>Loading ...</div>
        }

        return <ChatAreaView currentUser={currentUser} otherUser={this.state.otherUser} messages={chatData.messages}/>;
    }

};

export default connect(props => ({
    currentUser: props.user,
    chatData: props.messages
}))(ChatArea);
