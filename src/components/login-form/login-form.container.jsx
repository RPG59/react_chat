import React from 'react';
import LoginFormView from "./login-form.view";
import { connect } from "react-redux";
import { Actions } from "../../redux/actions";
import { Redirect } from "react-router-dom";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.isRedirect = false;
    }

    onSubmit = async username => {
        try {
            this.props.loginUser(username);
            this.isRedirect = true;
        } catch (e) {
            console.log(e);
            // TODO: error handle
        }
    };

    render() {
        if (this.isRedirect)
            return <Redirect to='/chat'/>

        return <LoginFormView onSubmit={this.onSubmit}/>
    }

}

export default connect(props => ({
    user: props.user
}), {loginUser: Actions.loginUser})(LoginForm);

