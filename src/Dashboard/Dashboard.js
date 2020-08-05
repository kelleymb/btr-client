import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import config from '../config';
import './Dashboard.css';

class Dashboard extends Component {
    
    static defaultProps = {
        history: {
            push: () => { }
        },
    }

    dipslayAdd = () => {
        const token = localStorage.getItem('Token')
        return (
            <section className={token ? "add-review" : "hide"}>
                <h4 className="add-link-section">Share your insight with your community. <Link className="link" to="/add">Add a review</Link></h4>
            </section>
        )
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
                {this.dipslayAdd()}
                <section className="view-reviews">
                    <Reviews />
                </section>
            </section>
            
        )
    }
}

export default Dashboard;