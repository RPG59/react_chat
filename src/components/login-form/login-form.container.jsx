import React from 'react';
import LoginFormView from "./login-form.view";
import { connect } from "react-redux";
import { Actions } from "../../redux/actions";
import { Redirect } from "react-router-dom";

const LoginForm = props => {
    const {user} = props;
    const onSubmit = async username => {
        props.loginUser(username);
    };

    if (user.userId && !user.errorMsg)
        return <Redirect to='/chat'/>
    return <LoginFormView onSubmit={onSubmit} errorMessage={user.errorMsg}/>

};

export default connect(props => ({
    user: props.user
}), {loginUser: Actions.loginUser})(LoginForm);

