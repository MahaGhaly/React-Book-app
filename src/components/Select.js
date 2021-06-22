import React from 'react';

const Select = (props) => {
    
    return(
        <div className="book-shelf-changer">
            <select onClick={(e)=>{props.onUpdate(e.target.value)}} defaultValue={props.shelf}>
                <option value="moveTo" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}
export default Select;