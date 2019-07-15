import React, { useEffect } from 'react';
import SidebarView from "./sidebar.view";
import { connect } from "react-redux";
import { Actions } from "../../redux/actions";

const Sidebar = props => {
    const {userId} = props;

    useEffect(() => {
        if (userId)
            props.fetchChats(userId);
    }, []);

    return <SidebarView/>
};

export default connect(props => ({
    userId: props.user.userId
}), {fetchChats: Actions.fetchChats})(Sidebar);

