import React from 'react';
import './chat-message.sass'

const ChatMessageView = props => {
    const {message, avatar, username, isOwnMessage} = props;
    const playAuio = () => {
        const audio = new Audio(URL.createObjectURL(message.audio))
        console.log(message);
        console.log(audio);
        // audio.play();
    }

    return (
        <div className={isOwnMessage ? 'chat-message own-message' : 'chat-message'}>
            <div className="user-info">
                <img src={avatar} alt="user-avatar"/>
                <div className="user-name">{username}</div>
            </div>
            <div className="message-content">
                <div className="messages-text">{message.text}</div>
                {
                    message.audio ? <div className="message-audio" onClick={playAuio}>play</div> : null
                }
            </div>
        </div>
    )
};

export default ChatMessageView;

