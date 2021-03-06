/* eslint-disable react/static-property-placement */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable dot-notation */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import ErrorBoundary from '../ErrorBoundary';
import './SignUp.css';

class SignUp extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

    handleSignUp = (e) => {
      e.preventDefault();
      const newUser = {
        user_name: e.target['user_name'].value,
        email: e.target['email'].value,
        password: e.target['password'].value,
      };
      fetch(`${config.API_ENDPOINT}/signup`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => {
          if (!res.ok) return res.json().then((e) => Promise.reject(e));
          return res;
        })
        .then(() => {
          alert('Account creation was successful! You are now being directed to the user sign in page!');
          this.props.history.push('/signin');
        })
        .catch((error) => {
          console.error({ error });
        });
    }

    render() {
      return (
        <ErrorBoundary>
          <section className="signup">
            <h1>Sign Up</h1>
            <form className="signup-form" onSubmit={this.handleSignUp}>
              <p className="notice">If you prefer anonymity, enter a pseudoname!</p>
              <label>User Name</label>
              <input
                required
                text="User Name"
                type="text"
                name="user_name"
                aria-required="true"
              />
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
                  className="signup-button"
                  aria-label="Submit-SignUp"
                >
                  Sign Up
                </button>
              </div>
              <div className="link-to-signin">
                <p>
                  Already have an account?
                  {' '}
                  <Link className="link" to="/signin">Sign In</Link>
                </p>
              </div>
            </form>
          </section>
        </ErrorBoundary>
      );
    }
}

export default SignUp;
