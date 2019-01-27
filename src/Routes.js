import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

class Routes extends Component {
    render() {
        if (this.props.isAuthenticated) {
            return <>
                <Route path="/" component={HomePage} />
            </>
        }

        return <>
            <Route path="/" component={HomePage} />
            <Route exact path="/login" render={() => <LoginPage onLoggedIn={this.props.onLoggedIn} />} />
            <Route exact path="/register" render={() => <RegisterPage onLoggedIn={this.props.onLoggedIn} />} />
        </>;
    }
}

export default Routes;
