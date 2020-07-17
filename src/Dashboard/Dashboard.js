import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import Add from '../Add/Add';
import Reviews from '../Reviews/Reviews';
import config from '../config';
import './Dashboard.css';

class Dashboard extends Component {
    
    static defaultProps = {
        history: {
            push: () => { }
        },
    }

    handleSignOut = e => {
        e.preventDefault()
        
        fetch(`${config.API_ENDPOINT}/signout`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(res => {
            if (!res.ok) 
                return res.json().then(e => Promise.reject(e))
        })
        .then(() =>{
            this.props.history.push('/')
        })

    }

    render() {

        return (
            <section className="dashboard">
                <ul className="Signout-nav">
                    <li className="nav" key={this.handleSignOut}>
                        <Link to="/">Sign Out</Link>
                    </li>
                </ul>
                <section className="add-review">
                    <h4>What have you read lately? Share your insight with your community.</h4>
                    <ul>
                        <li key={Add}><Link to="/add">Add a review</Link></li>
                    </ul>    
                </section>
                <section className="view-reviews">
                    <h4>Curious what's in the blogosphere?</h4>
                    <Reviews />
                </section>
            </section>
            
        )
    }
}

export default Dashboard;