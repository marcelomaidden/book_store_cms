import React from 'react';

const CATEGORIES = [
  { key: 0, name: 'Action' },
  { key: 1, name: 'Biography' },
  { key: 2, name: 'History' },
  { key: 3, name: 'Horror' },
  { key: 4, name: 'Kids' },
  { key: 5, name: 'Learning' },
  { key: 6, name: 'Sci-Fi' },
];

const BooksForm = () => (
  <form action="#" method="POST">
    <input type="text" name="title" placeHolder="Enter the book title" />
    <select name="category">
      {
        CATEGORIES.map(({ key, name }) => <option value={name} key={key}>{name}</option>)
      }
    </select>
    <button type="button">Create book</button>
  </form>
);

export default BooksForm;
