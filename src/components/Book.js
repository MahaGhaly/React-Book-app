import React from 'react';
import { update } from '../BooksAPI';
import Select from './Select'

const Book = props => {

const {book} = props;

function choosingShelf (shelfTitle) {
    update(book, shelfTitle)
}
    
    return (

            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <Select shelf={(book.shelf !== undefined)?(book.shelf):("none")} onUpdate={(e)=>{choosingShelf(e)}}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        )
    }


export default Book;


