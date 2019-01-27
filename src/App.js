import React, {Component} from 'react';
import Header from './components/Header';
import AuthModel from './models/AuthModel';
import Routes from './Routes';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authenticated: !!localStorage.getItem('token'),
            token: localStorage.getItem('token'),
            user: null
        }
    }

    handleLoggedIn = ({ token }) => {
        localStorage.setItem('token', token);
        this.setState({ authenticated: true, token });
    };

    handleLoggedOut = () => {
        localStorage.removeItem('token');
        this.setState({ authenticated: false, token: null, user: null });
    };

    componentDidMount() {
        if (this.state.authenticated === true) {
            this.me();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.authenticated === false && this.state.authenticated === true) {
            this.me().then(() => {
                window.location = '/';
            });
        } else if (prevState.authenticated === true && this.state.authenticated === false) {
            window.location = '/';
        }
    }

    me = () => AuthModel.me().then(user => {
        this.setState({ user });
    });

    render() {
        return (
            <div className="App">
                <Router>
                    <>
                        <Header
                            isAuthenticated={this.state.authenticated}
                            user={this.state.user}
                            onLoggedOut={this.handleLoggedOut}
                        />
                        <Routes
                            isAuthenticated={this.state.authenticated}
                            onLoggedIn={this.handleLoggedIn}
                        />
                    </>
                </Router>
            </div>
        );
    }
}

export default App;
