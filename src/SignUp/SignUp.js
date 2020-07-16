import React, { Component } from 'react';
import config from '../config'
import './SignUp.css';

class SignUp extends Component {
    
    handleSignUp = e => {
        e.preventDefault();
        const newUser = {
            user_name: e.target['user_name'].value,
            email: e.target['email'].value,
            password: e.target['password'].value
        }
        fetch(`${config.API_ENDPOINT}/signup`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })  
        .then(res => {
            console.log(res)
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res
        })
        .catch(error => {
            console.error({ error })
            console.log(error)
        })
    }

    render() {
        return (
            <section className="signup">
                <h1>Sign Up</h1>
                <form className="signup-form"onSubmit={this.handleSignUp}>
                    <label>User Name</label>
                    <input 
                        required
                        text="User Name"
                        type="text"
                        name="user_name"
                    >
                    </input>
                    <label>Email Address</label>
                    <input 
                        required
                        text="Email Address"
                        type="email"
                        name="email"
                    >
                    </input>
                    <label>Password</label>
                    <input
                        required
                        text="Password"
                        type="password"
                        name="password"
                    >
                    </input>
                    <div className="button-div">
                        <button 
                            type="submit" 
                            className="signup-button">
                            Sign Up
                        </button>    
                    </div>
                </form>
            </section>
        )
    }
}

export default SignUp;