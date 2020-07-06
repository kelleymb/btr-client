import React, {Component} from 'react';
import './Reviews.css'

const five = [
    {
        user_name: 'lorem',
        title: 'lorem', 
        author: 'lorem', 
        rating: 5, 
        content: 'lorem lorem lorem', 
        timestamp: 'lorem lorem lorem'
    },
    {
        user_name: 'lorem',
        title: 'lorem', 
        author: 'lorem', 
        rating: 5, 
        content: 'lorem lorem lorem', 
        timestamp: 'lorem lorem lorem'
    }
];

const four = [
    {
        user_name: 'lorem',
        title: 'lorem', 
        author: 'lorem', 
        rating: 4, 
        content: 'lorem lorem lorem', 
        timestamp: 'lorem lorem lorem'
    },
    {
        user_name: 'lorem',
        title: 'lorem', 
        author: 'lorem', 
        rating: 4, 
        content: 'lorem lorem lorem', 
        timestamp: 'lorem lorem lorem'
    }
];

const three = [
    {
        user_name: 'lorem',
        title: 'lorem', 
        author: 'lorem', 
        rating: 3, 
        content: 'lorem lorem lorem', 
        timestamp: 'lorem lorem lorem'
    },
    {
        user_name: 'lorem',
        title: 'lorem', 
        author: 'lorem', 
        rating: 3, 
        content: 'lorem lorem lorem', 
        timestamp: 'lorem lorem lorem'
    }
];

const two = [
    {
        user_name: 'lorem',
        title: 'lorem', 
        author: 'lorem', 
        rating: 2, 
        content: 'lorem lorem lorem', 
        timestamp: 'lorem lorem lorem'
    },
    {
        user_name: 'lorem',
        title: 'lorem', 
        author: 'lorem', 
        rating: 2, 
        content: 'lorem lorem lorem', 
        timestamp: 'lorem lorem lorem'
    }
];

const one = [
    {
        user_name: 'lorem',
        title: 'lorem', 
        author: 'lorem', 
        rating: 1, 
        content: 'lorem lorem lorem', 
        timestamp: 'lorem lorem lorem'
    },
    {
        user_name: 'lorem',
        title: 'lorem', 
        author: 'lorem', 
        rating: 1, 
        content: 'lorem lorem lorem', 
        timestamp: 'lorem lorem lorem'
    }  
];

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
                    <br/><label htmlFor="rating-input">Rating</label><br/>
                    <br/>
                    <select id="rating-input" name="rating-input">
                        <option value={five}>5 Star Reviews</option>
                        <option value={four}>4 Star Reviews</option>
                        <option value={three}>3 Star Reviews</option>
                        <option value={two}>2 Star Reviews</option>
                        <option value={one}>1 Star Reviews</option>
                    </select>
                    <section className="rating-button">
                        <button type="submit" >Search</button><br/>
                    </section>
                </form>
                <section className="ratings_results">
                    <p>{this.props.reviews}</p>
                </section>
            </section>
        )
    }
}

export default Reviews;