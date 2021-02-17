import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BookList = ({ books, delete: handleDelete }) => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Category</th>
      </tr>
    </thead>
    <tbody>
      {
        books.map(
          book => <tr key={book.id}><Book book={book} delete={handleDelete} /></tr>,
        )
      }
    </tbody>
  </table>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  delete: PropTypes.func.isRequired,
};

export default BookList;
