import React, {Component} from 'react';
import './Reviews.css'
import config from '../config';

class Reviews extends Component {
    
    state = {
        reviews: [],
        error: null
    }

    handleRating = e => {
        e.preventDefault();
        const rating = Number(e.target['rating-input'].value)
        console.log(rating)
        console.log(typeof rating)
        fetch(`${config.API_ENDPOINT}/reviews?rating=${rating}`)
            .then(ratingRes => {
                if (!ratingRes.ok)
                    return ratingRes.json().then(e => Promise.reject(e))
                if(ratingRes.json() === 0) {
                    console.error('Oops! There are no reviews available for that rating. Try again.')
                }
                return ratingRes
            })
            .catch(error => {
                console.error({ error })
                console.log(error)
            })
    }

    handleUser = e => {
        e.preventDefault()
        const user = e.target['user-input'].value
        console.log(user)
        fetch(`${config.API_ENDPOINT}/reviews/${user}`)
            .then(userRes => {
                if (!userRes.ok)
                    return userRes.json().then(e => Promise.reject(e))
                if(userRes.json() === 0) {
                    console.error('Oops! There is no user by that User Name. Check your spelling and try again!')
                }
                return userRes
            })
            .catch(error => {
                console.error({ error })
                console.log(error)
            })
    }

    render() {
        const { reviews=[] } = this.state.reviews
        return (
            <section>
                <h2>Browse through user insights</h2>
                <section className="search-by-rating">
                    <form className="rating-search-form" onSubmit={this.handleRating}>
                        <label htmlFor="rating-input">Search by Review Rating</label>
                        <select id="rating-input" name="rating-input">
                            <option value="5">5 Star Reviews</option>
                            <option value="4">4 Star Reviews</option>
                            <option value="3">3 Star Reviews</option>
                            <option value="2">2 Star Reviews</option>
                            <option value="1">1 Star Reviews</option>
                        </select>
                        <section className="rating-button">
                            <button type="submit" >Search</button>
                        </section>
                    </form>
                    <section className="ratings_results">
                        {reviews.map(review =>
                            <p>
                                <li key={review.id}>{review.user_name}</li>
                                <li key={review.id}>{review.title}</li>
                                <li key={review.id}>{review.author}</li>
                                <li key={review.id}>{review.rating}</li>
                                <li key={review.id}>{review.content}</li>
                                <li key={review.id}>{review.created}</li>
                            </p>
                        )}
                    </section>
                </section>
                <section className="search-by-user" onSubmit={this.handleUser}>
                    <form className="user-search-form">
                    <label htmlFor="user-input">Search by User Name</label>
                    <input required text='Search by User Name' type='text' name='user-input'></input>
                    <section className="user-search-button">
                        <button type="submit" >Search</button>
                    </section>
                    </form>
                    <section className="users-results">
                        {reviews.map(review =>
                            <p>
                                <li key={review.id}>{review.user_name}</li>
                                <li key={review.id}>{review.title}</li>
                                <li key={review.id}>{review.author}</li>
                                <li key={review.id}>{review.rating}</li>
                                <li key={review.id}>{review.content}</li>
                                <li key={review.id}>{review.created}</li>
                            </p>
                        )}
                    </section>
                </section>
            </section>
        )
    }
}

export default Reviews;