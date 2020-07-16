import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import Panel from '../Panel/Panel';
import './Nav.css';

class Nav extends Component {
    
    render() {
        return (
            <ul>
                <li className="nav" key={Home}><Link to="/">Home</Link></li>
                <li className="nav" key={SignUp}><Link to="/signup">Sign Up</Link></li>
                <li className="nav" key={SignIn}><Link to="/signin">Sign In</Link></li>
                <li className="nav" key={Panel}><Link to="/panel">Panel</Link></li>
            </ul>
        )
    }
}

export default Nav;