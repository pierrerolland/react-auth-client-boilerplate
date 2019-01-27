import React, { Component } from 'react';
import { Button, TextField, Snackbar, SnackbarContent } from '@material-ui/core';
import AuthModel from '../models/AuthModel';
import UserModel from '../models/UserModel';
import '../css/RegisterForm.css';

class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            error: ''
        };
    }

    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value });
    };

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        UserModel
            .register(this.state.username, this.state.password, this.state.email)
            .then(() => AuthModel.login(this.state.username, this.state.password))
            .then(this.props.onLoggedIn)
            .catch(err => {
                this.setState({ error: 'Register failed' });
            })
        ;
    };

    render() {
        return (
            <form className="RegisterForm" onSubmit={this.handleSubmit}>
                <TextField
                    label="Username"
                    margin="normal"
                    variant="outlined"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                />
                <TextField
                    label="Email"
                    type="email"
                    margin="normal"
                    variant="outlined"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <TextField
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                />

                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                >
                    Register
                </Button>

                {this.state.error ? (
                    <Snackbar
                        open={true}
                        autoHideDuration={5000}
                        onClose={() => this.setState({ error: '' })}
                    >
                        <SnackbarContent
                            aria-describedby="error-snackbar"
                            className="RegisterForm-error"
                            message={
                                <span id="error-snackbar">
                                {this.state.error}
                            </span>
                            }
                        />
                    </Snackbar>
                ) : null}

            </form>
        );
    }
}

export default RegisterForm;
