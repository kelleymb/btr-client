import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.css'

class About extends Component {
    
    render() {
        return (
        <section>
            <section className="why-about-section">
                <h2>Why use Born To Read?</h2>
                <p>
                    BTR was created to change the way readers both post and read reviews. 
                    Our unique rating system promotes users to share more than just another biased review and be as objective as possible.  
                </p>
                <p>
                    BTR is a spoiler free zone, where all book connoisseurs can come together to share and browse through an insightful collection of reviews.
                </p>    
            </section>
            <section className="getting-started">
                <h2>Getting started</h2>
                <ol>
                    <li>Create an account with us! <Link to="/signup">Sign Up Here</Link></li>
                    <li>Sign in with your credentials.</li>
                    <li>Browse through the <Link to="/dashboard">Dashboard</Link> and utilize user services such as posting a book review or browsing through reviews by both rating and username.</li>
                    <li>Keep calm and read on!</li>
                </ol>
            </section>
        </section>
        )
    }
}

export default About;