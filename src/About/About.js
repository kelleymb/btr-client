import React, { Component } from 'react';
import './About.css'

class About extends Component {
    
    render() {
        return (
        <section>
            {/* use this section to explain what BTR is and why BTR? */}
            <section className="about">
                <h2>more than a biased review</h2>
                    <p>where book connoisseurs can come together</p>
                    <p>our unique and innovative rating system allows our members to browse through an insightful collection of reviews </p>
            </section>
            {/* Use this section to help the user understand how to use the app */}
            <section className="howtogetstarted">

            </section>
        </section>
        )
    }
}

export default About;