/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import config from '../config';
import ErrorBoundary from '../ErrorBoundary';
import './Add.css';

class Add extends Component {
    static defaultProps = {
      history: {
        push: () => { },
      },
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const newReview = {
        user_name: e.target['user-input'].value,
        title: e.target['title-input'].value,
        author: e.target['author-input'].value,
        content: e.target['add-content'].value,
        rating: e.target['rating-input'].value,
      };
      console.log(JSON.stringify(newReview));
      fetch(`${config.API_ENDPOINT}/add`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newReview),
      })
        .then((res) => {
          if (!res.ok) return res.json().then((e) => Promise.reject(e));
          return res;
        })
        .then(() => {
          alert('Your review has been successfully posted!');
          this.props.history.push('/dashboard');
        })
        .catch((error) => {
          console.error({ error });
        });
    }

    render() {
      return (
        <ErrorBoundary>
          <section className="add-page">
            <h1 className="add-hdr">Add a Review</h1>
            <h2 className="spoiler">You are entering a spoiler free zone</h2>
            <section className="guide-section">
              <h4 className="question">Would you recommend this book to others?</h4>
              <h4 className="question">Did it live up to your expectations?</h4>
              <h4 className="question">Did you laugh? Cry? Think?</h4>
              <h4 className="question">Did it affect you?</h4>
              <h4 className="question">Did you care about the characters?</h4>
              <h4 className="question">Was the dialogue believable?</h4>
              <h4 className="question">Did any quotes strike you?</h4>
              <h4 className="question">Do you want to read it again?</h4>
            </section>
            <form className="add-review-form" onSubmit={this.handleSubmit}>
              <div className="user-field">
                <label className="user-input" htmlFor="user-input" aria-required="true">Username</label>
                <input type="text" id="user-input" name="user-input" />
              </div>
              <div className="title-field">
                <label className="title-input" htmlFor="title-input" aria-required="true">Title</label>
                <input type="text" id="title-input" name="title-input" />
              </div>
              <div className="author-field">
                <label className="author-input" htmlFor="author-input" aria-required="true">Author</label>
                <input type="text" id="author-input" name="author-input" />
              </div>
              <div className="content-field">
                <label className="add-content-input" htmlFor="add-content-input" aria-required="true">Content</label>
                <textarea id="add-content-input" name="add-content" />
              </div>
              <div className="rating-field">
                <h3 className="qualities">Qualities of a...</h3>
                <section className="rating-guide">
                  <h4 className="five-star">5 star rating</h4>
                  <h5 className="desc">An absolute masterpiece, impactful, a must read</h5>
                  <h4 className="four-star">4 star rating</h4>
                  <h5 className="desc">A quality work, highly recommend</h5>
                  <h4 className="three-star">3 star rating</h4>
                  <h5 className="desc">Worth a read, would recommend</h5>
                  <h4 className="two-star">2 star rating</h4>
                  <h5 className="desc">Did not meet my expectations, would not reccomend</h5>
                  <h4 className="one-star">1 star rating</h4>
                  <h5 className="desc">Read at your own risk</h5>
                </section>
                <label className="rating-input" htmlFor="rating-input" aria-required="true">Given thought to the rating parameters above, what rating would you give to this piece?</label>
                <select id="rating-input" name="rating-input">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div htmlFor="add-review-buttons">
                <button
                  onClick={this.props.onClick}
                  type="submit"
                  className="add-button"
                  aria-label="Submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
        </ErrorBoundary>
      );
    }
}

export default Add;
