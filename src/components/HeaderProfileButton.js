import React, { Component } from 'react';
import { Button } from "@material-ui/core";
import '../css/Header.css';
import { Link } from "react-router-dom";

class HeaderProfileButton extends Component {
    render() {
        if (this.props.isAuthenticated) {
            return <>
                {this.props.user ? this.props.user.username : <></>}
                <Button color="inherit" onClick={this.props.onLoggedOut}>Logout</Button>
            </>
        }

        return (
            <Link to="/login">
                <Button color="inherit">Login</Button>
            </Link>
        );
    }
}

export default HeaderProfileButton;
