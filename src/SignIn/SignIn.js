import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
    
    handleSignIn = e => {
        e.preventDefault();
        alert('Submit button works!')
    }

    render() {
        return (
            <section className="signin">
                <h1>Sign In</h1>
                <form className="signin-form" onSubmit={this.handleSignIn}>
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
                    ></input>
                    <button type="submit" className="button">
                    Sign In
                    </button>
                </form>
            </section>
        )
    }
}

export default SignIn;