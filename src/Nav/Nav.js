import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
    
    render() {
        return (
            <ul>
                <li className="nav"><Link to="/">Home</Link></li>
                <li className="nav"><Link to="/about">About</Link></li>
                <li className="nav"><Link to="/signup">Sign Up/Sign In</Link></li>
                <li className="nav"><Link to="/panel">Panel</Link></li>
                <li className="nav"><Link to="/add">Add a Review</Link></li>
                <li className="nav"><Link to="/reviews">Reviews</Link></li>
            </ul>
        )
    }
}

export default Nav;