import React from 'react';

const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export default BooksForm = (props) => {
  return (
    <form action='#' method='POST'>
      <input type='text' name='title' placeHolder='Enter the book title' />
      <select name='category'>
        { 
          CATEGORIES.map( category => <option value={category}>{category}</option>
        )};
      </select>
      <button type='button'>Create book</button>
    </form>
  )
}