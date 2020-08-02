import React, {Component} from 'react';
import config from '../config';
import ErrorBoundary from '../ErrorBoundary';
import './Reviews.css'

class Reviews extends Component {
    
    state = {
        reviews: [],
    }

    handleRating = e => {
        e.preventDefault();
        const rating = Number(e.target['rating-input'].value)
        this.setState({
            reviews: []
        })
        fetch(`${config.API_ENDPOINT}/reviews?rating=${rating}`)
        .then(res => {
            if (!res.ok)
              return res.json().then(e => Promise.reject(e))
            return res.json()
        })
        .then(data => {
            this.setState({ 
                reviews: [
                    ...data
                ]
            })
        })
        .catch(error => {
            console.error({ error })
            console.log(error)
        })
    }

    handleUser = e => {
        e.preventDefault()
        const user = e.target['user-input'].value
        fetch(`${config.API_ENDPOINT}/reviews/${user}`)
        .then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
                return res.json()
            })
        .then(data => {
            this.setState({ 
                reviews: [
                    ...data
                ]
            })
        })
        .catch(error => {
            console.error({ error })
        })
    }


    render() {
        return (
            <ErrorBoundary>
                <section className="reviews-section">
                    <h2>Browse through user insights</h2>
                    <section className="search-by-rating">
                        <form className="rating-search-form" onSubmit={this.handleRating}>
                            <label htmlFor="rating-input" aria-required="true">Search by Review Rating</label>
                            <select id="rating-input" name="rating-input">
                                <option value="5">5 Star Reviews</option>
                                <option value="4">4 Star Reviews</option>
                                <option value="3">3 Star Reviews</option>
                                <option value="2">2 Star Reviews</option>
                                <option value="1">1 Star Reviews</option>
                            </select>
                            <section className="rating-button">
                                <button 
                                    onClick={this.props.onClick}
                                    className="rating-submit" 
                                    type="submit" 
                                    aria-label="Submit-Search">
                                Search
                                </button>
                            </section>
                        </form>
                    </section>
                    <section className="search-by-user" onSubmit={this.handleUser}>
                        <form className="user-search-form">
                        <label htmlFor="user-input" aria-required="true">Search by User Name</label>
                        <input required placeholder='Lorem21' type='text' name='user-input'></input>
                        <section className="user-search-button">
                            <button 
                                onClick={this.props.onClick}
                                className="user-submit" 
                                type="submit" 
                                aria-label="Submit-Search">
                            Search
                            </button>
                        </section>
                        </form>
                    </section>
                    <section className="results">
                        {this.state.reviews.map(review =>
                            <div className="review-result">
                                <div className="user_name">Username: {review.user_name}</div>
                                <div className="title">Book Title: {review.title}</div>
                                <div className="author">Author: {review.author}</div>
                                <div className="rating">Rating: {review.rating}/5</div>
                                <div className="content">Content: {review.content}</div>
                        </div>
                        )}
                    </section>
                </section>
            </ErrorBoundary>
        )
    }
}

export default Reviews;