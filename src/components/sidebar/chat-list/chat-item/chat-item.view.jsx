import React from 'react';

import './chat-item.sass';

const ChatItemView = props => {
    const {avatar, name, clickCallback} = props;


    return (
        <div className='chat-item' onClick={clickCallback}>
            <div className="avatar">
                <img src={avatar} alt="user-avatar"/>
            </div>
            <div className="username">{name}</div>
        </div>
    )
};

export default ChatItemView;
