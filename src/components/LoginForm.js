import React, { Component } from 'react';
import { Button, TextField, Snackbar, SnackbarContent } from '@material-ui/core';
import AuthModel from '../models/AuthModel';
import '../css/LoginForm.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            error: ''
        };
    }

    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value });
    };

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        AuthModel
            .login(this.state.username, this.state.password)
            .then(this.props.onLoggedIn)
            .catch(() => {
                this.setState({ error: 'Login failed' });
            })
        ;
    };

    render() {
        return (
            <form className="LoginForm" onSubmit={this.handleSubmit}>
                <TextField
                    label="Username"
                    margin="normal"
                    variant="outlined"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
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
                    Login
                </Button>

                {this.state.error ? (
                    <Snackbar
                        open={true}
                        autoHideDuration={5000}
                        onClose={() => this.setState({ error: '' })}
                    >
                        <SnackbarContent
                            aria-describedby="error-snackbar"
                            className="LoginForm-error"
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

export default LoginForm;
