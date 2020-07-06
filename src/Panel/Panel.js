import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import './Panel.css'

class Panel extends Component {
    
    render() {

        return (
            <section className="panel">
                <section className="add-review">
                    <h4>What have you read lately? Share your insight with your community.</h4>
                    <ul><li><Link to="/add">Add a review</Link></li></ul>    
                </section>
                <section className="view-reviews">
                    <h4>Curious what's in the blogosphere?</h4>
                    <ul><li><Link to="/reviews">Explore reviews</Link></li></ul>
                </section>
                <section className="my-reviews">
                    <h2>My Reviews</h2>
                    <br/>
                    <p>{this.props.reviews}</p>
                </section>
            </section>
            
        )
    }
}

export default Panel;