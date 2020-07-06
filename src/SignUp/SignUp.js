import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
    
    handleSignUp = e => {
        e.preventDefault();
        alert('Submit button works!')
    }

    render() {
        return (
            <section className="signup">
                <h1>Sign Up</h1>
                <form className="signup-form"onSubmit={this.handleSignUp}>
                    <label>Name</label>
                    <input 
                        required
                        text="Name"
                        type="text"
                    >
                    </input>
                    <label>Email Address</label>
                    <input 
                        required
                        text="Email Address"
                        type="email"
                    >
                    </input>
                    <label>Password</label>
                    <input
                        required
                        text="Password"
                        type="password"
                    >
                    </input>
                    <button 
                        type="submit" 
                        className="signup-button">
                        Sign Up
                    </button>
                </form>
            </section>
        )
    }
}

export default SignUp;