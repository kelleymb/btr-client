import React, { Component } from 'react';
import config from '../config'
import { Link } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import './SignIn.css';

class SignIn extends Component {
    
    static defaultProps = {
        history: {
            push: () => { }
        },
    }

    state = {
        token: 0
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
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res
        })
        .then(data => {
            const token = data.headers.get('Token')
            this.setState({
                token: token
            })
            localStorage.setItem('Token', token)
        })
        .then(() => {
            alert('Sign in successful! You are now being redirected to the Dashboard.')
            this.props.history.push('/dashboard')
        })
        .catch(error => {
            console.error({ error })
        })
    }

    render() {
        return (
            <ErrorBoundary>
                <section className="signin">
                    <h1>Sign In</h1>
                    <form className="signin-form" onSubmit={this.handleSignIn}>
                        <label>Email Address</label>
                        <input 
                            required
                            text="Email Address"
                            type="email"
                            name="email"
                            aria-required="true"
                        >
                        </input>
                        <label>Password</label>
                        <input
                            required
                            text="Password"
                            type="password"
                            name="password"
                            aria-required="true"
                        ></input>
                        <div className="button-div">
                            <button
                                onClick={this.props.onClick} 
                                type="submit" 
                                className="signin-button"
                                aria-label="Submit-SignIn">
                            Sign In
                            </button>
                        </div>
                        <div><p>Don't have an account? <Link to="/signup">Sign Up</Link></p></div>
                    </form>
                </section>
            </ErrorBoundary>
        )
    }
}

export default SignIn;