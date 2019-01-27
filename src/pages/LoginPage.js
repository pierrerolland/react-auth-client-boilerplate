import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import '../css/LoginPage.css';

class LoginPage extends Component {
    render() {
        return (
            <div className="LoginPage">
                <h1>Login</h1>
                <LoginForm onLoggedIn={this.props.onLoggedIn} />
                <Link to="/register">
                    Not a member yet ? Click here to register
                </Link>
            </div>
        );
    }
}

export default LoginPage;
