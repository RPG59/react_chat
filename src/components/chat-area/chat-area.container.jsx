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

    componentWillMount() {
        const {currentUser, messages} = this.props;
        const currentUserId = currentUser.userId;
        const otherUserMessage = messages.find(message => message.userId !== currentUserId);
        if (otherUserMessage && otherUserMessage.userId && this.state.otherUser === null) {
            this.isLoading = true;
            HttpService.fetchUser(otherUserMessage.userId).then(user => {
                this.isLoading = false;
                this.setState({otherUser: null});
            });
        }
    }


    render() {
        const {currentUser, messages} = this.props;
        if (this.isLoading) {
            return <div>Loading ...</div>
        }

        return <ChatAreaView currentUser={currentUser} otherUser={this.state.otherUser} messages={messages}/>;
    }

};

export default connect(props => ({
    currentUser: props.user,
    messages: props.messages
}))(ChatArea);
