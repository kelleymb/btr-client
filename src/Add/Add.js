import React, { Component } from 'react';
import './Add.css';

class Add extends Component {

    handleAdd = e => {
        e.preventDefault();
        alert('Submit button works!')
    }

    render() {
        return (
            <section className="add-page">
                <h1>Add a Review</h1>
                <section className="guide-section">
                    <h2>You are entering a spoiler free zone</h2>
                    <h4>Let us know...</h4>
                    <h4>Would you recommend this book to others?</h4>
                    <h4>Did it live up to your expectations?</h4>
                    <h4>Did you laugh? Cry?</h4>
                    <h4>Did it affect you?</h4>
                    <h4>Do you want to read it again?</h4>
                </section>
                <form className="add-review-form" onSubmit={this.handleAdd}>
                    <div className="field">
                        <label htmlFor="title-input">Title</label>
                        <input type="text" id="title-input" name="title-author"/>
                    </div>
                    <div className="field">
                        <label htmlFor="author-input">Author</label>
                        <input type="text" id="author-input" name="title-author"/>
                    </div>
                    <div className="field">
                        <label htmlFor="add-content-input">Content</label>
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
                        <h4>Given thought to the rating parameters above,</h4>
                        <h4>what rating would you give to this piece?</h4>
                        <label className="rating-input" htmlFor="rating-input">Rating</label>
                        <select id="rating-input" name="rating-input">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div htmlFor="add-review-buttons">
                        <button type="submit" className="add-button">Submit</button>
                    </div>
                </form>
            </section>
        )
    }
}

export default Add;
