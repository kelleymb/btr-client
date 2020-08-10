/* eslint-disable react/static-property-placement */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-alert */
/* eslint-disable dot-notation */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import ErrorBoundary from '../ErrorBoundary';
import './SignIn.css';

class SignIn extends Component {

  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  constructor(props) {
    super(props);
    this.state = {
      token: 0,
    };
  }

    handleSignIn = (e) => {
      e.preventDefault();
      const userCred = {
        email: e.target['email'].value,
        password: e.target['password'].value,
      };
      fetch(`${config.API_ENDPOINT}/signin`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(userCred),
      })
        .then((res) => {
          if (!res.ok) return res.json().then((e) => Promise.reject(e));
          return res;
        })
        .then((data) => {
          const token = data.headers.get('Token');
          this.setState({
            token,
          });
          localStorage.setItem('Token', token);
        })
        .then(() => {
          alert('Sign in successful! You are now being redirected to the Dashboard.');
          this.props.history.push('/dashboard');
        })
        .catch((error) => {
          console.error({ error });
        });
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
              />
              <label>Password</label>
              <input
                required
                text="Password"
                type="password"
                name="password"
                aria-required="true"
              />
              <div className="button-div">
                <button
                  onClick={this.props.onClick}
                  type="submit"
                  className="signin-button"
                  aria-label="Submit-SignIn"
                >
                  Sign In
                </button>
              </div>
              <div className="link-to-signup">
                <p>
                  Don't have an account?
                  <Link className="link" to="/signup">Sign Up</Link>
                </p>
              </div>
            </form>
          </section>
        </ErrorBoundary>
      );
    }
}

export default SignIn;
