import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchButton extends Component {
    render() {
        return (
        <div className="open-search">
            <Link to='/search'  className="button" >Add a book</Link>
        </div>
        )
    }
}

export default SearchButton;
