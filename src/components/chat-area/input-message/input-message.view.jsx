import React from 'react';
import { Icon, Input } from "antd";

import './input-message.sass'

class InputMessageView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: '',
            isSoundRecord: false
        }
    }

    textSendHandler = () => {
        this.props.textSendHandler(this.state.textInput);
        this.setState({textInput: ''});
    };

    inputOnChange = event => {
        this.setState({textInput: event.target.value});
    };

    startSoundRecord = () => {
        this.props.startSoundRecord();
        this.setState({isSoundRecord: true});
    };

    endSoundRecord = () => {
        this.props.endSoundRecord();
        this.setState({isSoundRecord: false});
    };


    render() {
        return (
            <div className="input-message">
                <div className="input-container">
                    <Input onChange={this.inputOnChange} value={this.state.textInput}/>
                    <Icon type="right" onClick={this.textSendHandler}/>
                    {
                        !this.state.isSoundRecord ? <Icon type="audio" onClick={this.startSoundRecord}/> :
                            <Icon type="stop" onClick={this.endSoundRecord}/>
                    }
                </div>
            </div>
        )
    }

};

export default InputMessageView;

