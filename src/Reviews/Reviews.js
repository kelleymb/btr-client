import React, {Component} from 'react';
import './Reviews.css'

class Reviews extends Component {
    
    handleSearch = e => {
        e.preventDefault();
        alert('Search button works!')
        
    }

    render() {

        return (
            <section>
                <h2>Browse through user insights</h2>
                <form className="rating-search-form" onSubmit={this.handleSearch}>
                    <label htmlFor="rating-input">Rating</label>
                    <select id="rating-input" name="rating-input">
                        <option value="">5 Star Reviews</option>
                        <option value="">4 Star Reviews</option>
                        <option value="">3 Star Reviews</option>
                        <option value="">2 Star Reviews</option>
                        <option value="">1 Star Reviews</option>
                    </select>
                    <section className="rating-button">
                        <button type="submit" >Search</button>
                    </section>
                </form>
                <section className="ratings_results">
                    <h4>{this.props.reviews}</h4>
                </section>
            </section>
        )
    }
}

export default Reviews;