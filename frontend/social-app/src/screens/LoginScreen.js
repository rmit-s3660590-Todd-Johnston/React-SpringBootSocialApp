import React, {Component} from 'react';
import {Button, Form, Icon, Input, Typography} from 'antd'
import AuthenticationService from "../AuthenticationService";


const {Text, Title} = Typography;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class LoginScreen extends Component {
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                AuthenticationService
                    .executeJwtAuthenticationService(values.username, values.password)
                    .then((response) => {
                        AuthenticationService.registerSuccessfulLoginForJwt(values.username, response.data.token);
                        this.props.history.push(`/profile`)
                    })
                    .catch((err) => {
                        console.error(err)
                    });
            }
        });
    };

    render() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <>
                <Form layout="vertical" onSubmit={this.handleSubmit}>
                    <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button
                            data-testid="login-button"
                            type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
                <a onClick={() => this.props.history.push("/registration")}>First time? Register</a>
            </>
        );
    }
}

export default Form.create({name: 'login_screen'})(LoginScreen)