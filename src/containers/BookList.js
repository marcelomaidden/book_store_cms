import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BookList = ({ books }) => (
  <table>
    {
      books.map(
        book => <tr key={book.id}><Book book={book} /></tr>,
      )
    }
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
};

export default BookList;
