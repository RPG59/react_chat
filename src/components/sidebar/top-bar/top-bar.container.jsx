import React from 'react';
import TopBarView from "./top-bar.view";
import { connect } from "react-redux";

const TopBar = props => {

    return <TopBarView {...props}/>
};

export default connect(props => ({
    avatar: props.user.avatar,
    username: props.user.username
}))(TopBar);
