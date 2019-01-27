import React, { Component } from 'react';
import RegisterForm from '../components/RegisterForm';
import '../css/RegisterPage.css';
import {Link} from "react-router-dom";

class RegisterPage extends Component {
    render() {
        return (
            <div className="RegisterPage">
                <h1>Register</h1>
                <RegisterForm onLoggedIn={this.props.onLoggedIn} />
                <Link to="/login">
                    Already a member ? Click here to log in
                </Link>
            </div>
        );
    }
}

export default RegisterPage;
