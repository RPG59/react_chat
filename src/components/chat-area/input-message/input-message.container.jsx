import React from 'react';
import InputMessageView from "./input-message.view";
import { connect } from "react-redux";
import { Actions } from "../../../redux/actions";
import { HttpService } from "../../../services/http.service";

class InputMessage extends React.Component {
    recorder = null;

    constructor(props) {
        super(props);
    }

    textSendHandler = value => {
        const {chatId} = this.props;
        const message = {
            userId: this.props.userId,
            text: value
        };

        HttpService.sendMessage(chatId, message).then(() => {
            this.props.fetchMessages(chatId);
        });
    };

    startSoundRecord = () => {
        console.log('start');
    };

    endSoundRecord = () => {
        console.log('end');
    };

    render() {
        return <InputMessageView textSendHandler={this.textSendHandler} startSoundRecord={this.startSoundRecord}
                                 endSoundRecord={this.endSoundRecord}/>
    }
};

export default connect(props => ({
    userId: props.user.userId,
    chatId: props.messages.chatId
}), {
    fetchMessages: Actions.fetchMessages
})(InputMessage);

