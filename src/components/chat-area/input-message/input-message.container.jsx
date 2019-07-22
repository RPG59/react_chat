import React from 'react';
import InputMessageView from "./input-message.view";
import { connect } from "react-redux";
import { Actions } from "../../../redux/actions";
import { HttpService } from "../../../services/http.service";

class InputMessage extends React.Component {
    mediaRecorder = null;
    track = null;
    mediaStream = null;

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
        const media = navigator.mediaDevices.getUserMedia({audio: true})
            .then(stream => {
                this.audioStreamDesc = stream;
                this.mediaRecorder = new MediaRecorder(stream);
                this.track = stream.getTracks()[0];
                this.mediaRecorder.start();
            });
    };

    endSoundRecord = () => {
        console.log('end');
        this.mediaRecorder.stop();
        this.track.stop();
        const {chatId} = this.props;
        this.mediaRecorder.addEventListener('dataavailable', event => {
            const message = {
                userId: this.props.userId,
                text: '',
                audio: event.data
            };
            HttpService.sendMessage(chatId, message).then(() => {
                this.props.fetchMessages(chatId);
            });
            // const audio = new Audio(URL.createObjectURL(event.data));
            // audio.play();
        })
    };

    render() {
        if (!this.props.chatId)
            return <></>;
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

