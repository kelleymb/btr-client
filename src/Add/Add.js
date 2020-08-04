import React, { Component } from 'react';
import config from '../config'
import ErrorBoundary from '../ErrorBoundary';
import './Add.css';

class Add extends Component {

    static defaultProps = {
        history: {
            push: () => { }
        },
    }

    // state = {
    //     showSection: true
    // }

    handleSubmit = e => {
        e.preventDefault();
        const newReview = {
            user_name: e.target['user-input'].value,
            title: e.target['title-input'].value,
            author: e.target['author-input'].value,
            content: e.target['add-content'].value,
            rating: e.target['rating-input'].value,
        }
        console.log(JSON.stringify(newReview))
        fetch(`${config.API_ENDPOINT}/add`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newReview),
        })
        .then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res
        })
        .then(() => {
            alert('Your review has been successfully posted!')
            this.props.history.push('/dashboard')
        })
        .catch(error => {
            console.error({ error })
        })
    }

    // handleDisplayGuide = e => {
    //     <section className={this.state.showSection ? "guide-section" : "hide"}>
    //         <button onClick={this.props.onClick || this.handleDisplayGuide}>Let us know...</button>
    //         <h4>Would you recommend this book to others?</h4>
    //         <h4>Did it live up to your expectations?</h4>
    //         <h4>Did you laugh? Cry? Think?</h4>
    //         <h4>Did it affect you?</h4>
    //         <h4>Did you care about the characters?</h4>
    //         <h4>Was the dialogue believable?</h4>
    //         <h4>Did any quotes strike you?</h4>
    //         <h4>Do you want to read it again?</h4>
    //     </section>
    // }

    // handleDisplayQualities = e => {

    // }

    render() {
    
        return (
            <ErrorBoundary>
                <section className="add-page">
                    <h1>Add a Review</h1>
                    <h2>You are entering a spoiler free zone</h2>
                    <section className="guide-section">
                        <h4>Let us know...</h4>
                        <h4>Would you recommend this book to others?</h4>
                        <h4>Did it live up to your expectations?</h4>
                        <h4>Did you laugh? Cry? Think?</h4>
                        <h4>Did it affect you?</h4>
                        <h4>Did you care about the characters?</h4>
                        <h4>Was the dialogue believable?</h4>
                        <h4>Did any quotes strike you?</h4>
                        <h4>Do you want to read it again?</h4>
                    </section>
                    <form className="add-review-form" onSubmit={this.handleSubmit}>
                        <div className="field">
                            <label className="user-input" htmlFor="user-input" aria-required="true">Username</label>
                            {/* <p className="user-input">Make sure your credentials match!</p> */}
                            <input type="text" id="user-input" name="user-input"/>
                        </div>
                        <div className="field">
                            <label className="title-input" htmlFor="title-input" aria-required="true">Title</label>
                            <input type="text" id="title-input" name="title-input"/>
                        </div>
                        <div className="field">
                            <label className="author-input" htmlFor="author-input" aria-required="true">Author</label>
                            <input type="text" id="author-input" name="author-input"/>
                        </div>
                        <div className="field">
                            <label className="add-content-input" htmlFor="add-content-input" aria-required="true">Content</label>
                            <textarea id="add-content-input" name="add-content"></textarea>
                        </div>
                        <div className="field">
                            <section className="rating-section">
                                <h3>Qualities of a...</h3>
                                <h4>5 star rating</h4>
                                    <h5>An absolute masterpiece, impactful, a must read</h5>
                                <h4>4 star rating</h4>
                                    <h5>A quality work, highly recommend</h5>
                                <h4>3 star rating</h4>
                                    <h5>Worth a read, would recommend</h5>
                                <h4>2 star rating</h4>
                                    <h5>Meh</h5>
                                <h4>1 star rating</h4>
                                    <h5>Would not read again, would not recommend</h5>
                            </section>
                            <h4>Given thought to the rating parameters above, what rating would you give to this piece?</h4>
                            <label className="rating-input" htmlFor="rating-input" aria-required="true">Rating</label>
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
                                aria-label="Submit" >
                            Submit
                            </button>
                        </div>
                    </form>
                </section>
            </ErrorBoundary>
        )
    }
}

export default Add;
