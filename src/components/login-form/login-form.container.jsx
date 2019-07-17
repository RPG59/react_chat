import React from 'react';
import LoginFormView from "./login-form.view";
import { connect } from "react-redux";
import { Actions } from "../../redux/actions";
import { Redirect } from "react-router-dom";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = async username => {
        this.props.loginUser(username);
    };

    render() {
        const {user} = this.props;

        if (user.userId && !user.errorMsg)
            return <Redirect to='/chat'/>

        return <LoginFormView onSubmit={this.onSubmit} errorMessage={user.errorMsg}/>
    }

}

export default connect(props => ({
    user: props.user
}), {loginUser: Actions.loginUser})(LoginForm);

