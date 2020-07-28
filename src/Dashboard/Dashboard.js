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

    displaySignOut = () => {
        const token = localStorage.getItem('Token')
        return (
            <section className={token ? "signout-section" : "hide"}>
                <button className="signout-button" onClick={this.props.onClick || this.handleSignOut}>
                    Sign Out
                </button>
            </section>  
        )
    }

    handleSignOut = e => {
        e.preventDefault()
        
        fetch(`${config.API_ENDPOINT}/signout`)
        .then(res => {
            if (!res.ok) 
                return res.json().then(e => Promise.reject(e))
        })
        .then(() =>{
            localStorage.removeItem('Token')
            alert('You have successfully signed out of your session! Thank you for using Born To Read!')
            this.props.history.push('/')
        })

    }

    render() {

        return (
            <section className="dashboard">
                {this.displaySignOut()}
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