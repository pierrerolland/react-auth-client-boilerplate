import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import HeaderProfileButton from './HeaderProfileButton';
import '../css/Header.css';

class Header extends Component {
    render() {
        return (
            <AppBar className="Header" position="static">
                <Toolbar>
                    <Typography  className="Header-left" variant="h6" color="inherit">
                        Boilerplate
                    </Typography>
                    <HeaderProfileButton
                        isAuthenticated={this.props.isAuthenticated}
                        user={this.props.user}
                        onLoggedOut={this.props.onLoggedOut}
                    />
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
