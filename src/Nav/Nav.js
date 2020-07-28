import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import SignIn from '../SignIn/SignIn';
import Dashboard from '../Dashboard/Dashboard';
import './Nav.css';

class Nav extends Component {

    displaySignIn = () => {
        const token = localStorage.getItem('Token')
        return (
            <li className={!token ? "nav" : "hide"} key={SignIn}><Link to="/signin">Sign In</Link></li>
        )
    }

    render() {
        return (
            <ul>
                <li className="nav" key={Dashboard}><Link to="/dashboard">Dashboard</Link></li>
                {this.displaySignIn()}
                <li className="nav" key={Home}><Link to="/">Home</Link></li>
            </ul>
        )
    }
}

export default Nav;