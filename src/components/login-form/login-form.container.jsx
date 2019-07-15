import React from 'react';
import LoginFormView from "./login-form.view";
import { connect } from "react-redux";
import { Actions } from "../../redux/actions";
import { Redirect } from "react-router-dom";

const INVALID_USER_MESSAGE = 'Invalid user!';
const INVALID_USER_TYPE = 'INVALID';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.errorMessage = '';
    }

    onSubmit = async username => {
        this.props.loginUser(username);
    };

    render() {
        const {user} = this.props;
        if (user.userId === INVALID_USER_TYPE)
            this.errorMessage = INVALID_USER_MESSAGE;
        else
            this.errorMessage = '';

        if (user.userId && user.userId !== INVALID_USER_TYPE)
            return <Redirect to='/chat'/>

        return <LoginFormView onSubmit={this.onSubmit} errorMessage={this.errorMessage}/>
    }

}

export default connect(props => ({
    user: props.user
}), {loginUser: Actions.loginUser})(LoginForm);

