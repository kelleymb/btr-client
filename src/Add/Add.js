import React, { Component } from 'react';
import './Add.css';

class Add extends Component {

    handleAdd = e => {
        e.preventDefault();
        alert('Submit button works!')
    }

    render() {
        return (
            <section>
                <h1>Add a Review</h1>
                <section className="guide-section">
                    <h2>You are entering a spoiler free zone</h2>
                    <p>Let us know...</p>
                    <p>Would you recommend this book to others?<br/>Did it live up to your expectations?<br/>Did you laugh? Cry?<br/>Did it affect you?<br/>Do you want to read it again?<br/></p>
                </section>
                <form className="add-review-form" onSubmit={this.handleAdd}>
                    <br/>
                    <div className="field">
                        <label htmlFor="title-author-input">Title, Author</label><br/>
                        {/* would there be a search field here? to search from googlebooks API? */}
                        <br/>
                        <input type="text" id="title-author-input" name="title-author"/>
                    </div>
                    <br/>
                    <div className="field">
                        <label htmlFor="add-content-input">Content</label><br/>
                        <br/>
                        <textarea id="add-content-input" name="add-content"></textarea>
                    </div>
                    <br/>
                    <div className="field">
                        <section className="rating-section">
                            <h3>Qualities of a...</h3>
                            <h4>5 star rating</h4>
                                <h5>An absolute masterpiece, impactful, a must read</h5>
                                {/* <ul>
                                    <li></li>
                                </ul> */}
                            <h4>4 star rating</h4>
                                <h5>A quality work, highly recommend</h5>
                                {/* <ul>
                                    <li></li>
                                </ul> */}
                            <h4>3 star rating</h4>
                                <h5>Worth a read, would recommend</h5>
                                {/* <ul>
                                    <li></li>
                                </ul> */}
                            <h4>2 star rating</h4>
                                <h5>Meh</h5>
                                {/* <ul>
                                    <li></li>
                                </ul> */}
                            <h4>1 star rating</h4>
                                <h5>Would not read again, would not recommend</h5>
                                {/* <ul>
                                    <li></li>
                                </ul> */}
                        </section>
                        <br/><br/>
                        <p>Given thought to the rating parameters above,</p>
                        <p>what rating would you give to this piece?</p> <br/>
                        <br/><label htmlFor="rating-input">Rating</label><br/>
                        <select id="rating-input" name="rating-input">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <br/>
                    <div htmlFor="add-review-buttons">
                        <button type="submit">Submit</button><br/>
                    </div>
                </form>
            </section>
        )
    }
}

export default Add;
