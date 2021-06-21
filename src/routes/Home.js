import React, { Component } from 'react';
import Header from '../components/Header';
import Shelf from '../components/Shelf';
import SearchButton from '../components/SearchButton';


class Home extends Component {
    render() {
        const {shelves, allBooks} = this.props;
        // console.log(shelves);
        return (
            <div className="list-books">
            {/* Header component: */}
            <Header />
            <div className="list-books-content">
                <>
                    {shelves.length > 0 && shelves.map(shelf=>
                            // Shelf component: 
                            <Shelf  
                                key={shelf.id}
                                title={shelf.title}
                                books={allBooks.filter(book => book.shelf === shelf.id)}
                            />  
                    )}
                </>
                <div className="open-search">
                {/* Search Button component: */}
                    <SearchButton />
                </div>
            </div>
        </div>
        );
    }
}
export default Home;



