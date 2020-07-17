import React, { Component } from 'react';
import config from '../config'
import { Link } from 'react-router-dom';
import './SignIn.css';

class SignIn extends Component {
    
    static defaultProps = {
        history: {
            push: () => { }
        },
    }

    handleSignIn = e => {
        e.preventDefault();
        const userCred = {
            email: e.target['email'].value,
            password: e.target['password'].value
        }
        fetch(`${config.API_ENDPOINT}/signin`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userCred)
        })  
        .then(res => {
            console.log(res)
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res
        })
        .then(review => {
        //     this.context.addReview(review)
            this.props.history.push('/panel')
        })
        .catch(error => {
            console.error({ error })
            console.log(error)
        })
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
                        name="email"
                    >
                    </input>
                    <label>Password</label>
                    <input
                        required
                        text="Password"
                        type="password"
                        name="password"
                    ></input>
                    <div className="button-div">
                        <button 
                        type="submit" 
                        className="signin-button">
                        Sign In
                        </button>
                    </div>
                    <div><p>Don't have an account? <Link to="/signup">Sign Up</Link></p></div>
                </form>
            </section>
        )
    }
}

export default SignIn;