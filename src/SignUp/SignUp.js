import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
    
    handleSignIn = e => {
        e.preventDefault();
        alert('Submit button works!')
    }

    render() {
        return (
            <section className="signup-in">
                <h1>Sign Up/In</h1>
                <form className="signup-in-form"onSubmit={this.handleSignIn}>
                    <label>Email Address</label><br></br>
                    <input 
                        required
                        text="Email Address"
                        type="email"
                    >
                    </input><br></br>
                    <br></br>
                    <label>Password</label><br></br>
                    <input
                        required
                        text="Password"
                        type="password"
                    ></input><br></br>
                    <br></br>
                    <button type="submit" className="button">
                    Sign Up/In
                    </button>
                </form>
            </section>
        )
    }
}

export default SignUp;