import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import * as BooksAPI from '../BooksAPI';
import { search } from '../BooksAPI';
import Book from '../components/Book';


function Search (props) {
    const [state, setState]=useState(
    {
        query: '',
        result: []
    }
    )
// API Search Function
const searchedBooks=function (query) {
    search(query)
    .then(res => 
        (setState(currState =>({...currState,result:res})))
    )
};

function queryChanged(e) {
    console.log('You\'re writing now: ', e.target.value)
    setState({ query: e.target.value });
    searchedBooks(state.query);
};

        
// function choosenBefore(result) {
//     let hasShelf = props.books.filter(book => book.id === result.id);
//     return hasShelf.length ? hasShelf[0].shelf : "none"}

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to='/'>Back</Link>
                <div className="search-books-input-wrapper">
                    <input 
                        type="text" 
                        placeholder="Search by title or author"
                        // value={state.query}
                        onChange={(e)=>queryChanged(e)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {(state.query !== "")?

                    ((Array.isArray(state.result))?

                    (state.result.filter(book=> book.imageLinks.thumbnail !== undefined).map(book=>{
                    const hasShelf=props.choosenBefore.find(hasShelf => hasShelf.id === book.id)
                    
                    if (hasShelf !== undefined) {
                        return(
                            <Book
                                key={hasShelf.id}
                                book={hasShelf}
                                title={hasShelf.title}
                                author={hasShelf.authors}
                                imageURL={hasShelf.imageLinks.thumbnail}
                                />
                        )
                    }else {
                        return( 
                            <Book
                            key={book.id}
                            book={book}
                            title={book.title}
                            author={book.authors}
                            imageURL={book.imageLinks.thumbnail}

                            />)}})):
                            
                            (<h1>No Match Found!!!</h1>) ) :

                                (<div>write book name, please...</div>)
                    }
                    
                </ol>
            </div>
        </div>
    ) 
}


export default Search;



