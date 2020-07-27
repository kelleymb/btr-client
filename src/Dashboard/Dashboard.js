import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import Add from '../Add/Add';
import Reviews from '../Reviews/Reviews';
import config from '../config';
import './Dashboard.css';

// needs to know if there is an existing session

class Dashboard extends Component {
    
    static defaultProps = {
        history: {
            push: () => { }
        },
    }

    handleSignOut = e => {
        e.preventDefault()
        
        fetch(`${config.API_ENDPOINT}/signout`)
        .then(res => {
            if (!res.ok) 
                return res.json().then(e => Promise.reject(e))
        })
        .then(() =>{
            alert('You have successfully signed out of your session! Thank you for using Born To Read!')
            this.props.history.push('/')
        })

    }

    render() {

        return (
            <section className="dashboard">
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
                <section>
                    <h4>Ready to sign out? Click below to end your session.</h4>
                    <button className="signout-button" onClick={this.props.onClick || this.handleSignOut}>
                        Sign Out
                    </button>
                </section>
            </section>
            
        )
    }
}

export default Dashboard;