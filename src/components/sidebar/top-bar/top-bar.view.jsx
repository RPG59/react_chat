import React from 'react';
import './top-bar.sass';
import { Redirect } from "react-router-dom";

const TopBarView = props => {
    const {avatar, username} = props;

    if (!username) {
        return <Redirect to='/'/>
    }

    return (
        <div className="top-bar">
            <div className="avatar">
                <img src={avatar} alt='user-avatar'/>
            </div>
            <div className="username">{username}</div>
        </div>
    )
};

export default TopBarView;
