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

        
function choosenBefore(result) {
    let hasShelf = props.books.filter(book => book.id === result.id);
    return hasShelf.length ? hasShelf[0].shelf : "none"}

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to='/'>Back</Link>
                <div className="search-books-input-wrapper">
                    <input 
                        type="text" 
                        placeholder="Search by title or author"
                        value={state.query}
                        onChange={(e)=>queryChanged(e)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {(state.query !== "")&&(Array.isArray(state.result)&& state.result.filter(book=> book.imageLinks.thumbnail !== undefined).map(book=>
                    <Book book={book} onChange={choosenBefore}/> ))}
                </ol>
            </div>
        </div>
    ) 
}


export default Search;



