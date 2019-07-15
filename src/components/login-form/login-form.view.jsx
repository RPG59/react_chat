import React from 'react';
import { Form, Input, Icon, Button } from "antd";

import './login-form.sass'

const LoginFormView = props => {
    const {onSubmit} = props;
    const {getFieldDecorator} = props.form;
    const submitHandler = e => {
        e.preventDefault();
        props.form.validateFields((err, value) => {
            if (!err) {
                onSubmit(value.username);
            }
        })
    };
    console.log(props);

    return (
        <div className='login-form'>
            <div className="title">Login</div>
            <Form onSubmit={submitHandler}>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: 'Please input your username!'}]
                    })(
                        <Input
                            prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder='username'
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};

export default Form.create({name: 'login_form'})(LoginFormView);
