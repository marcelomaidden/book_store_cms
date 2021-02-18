import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Book.css';

const Book = ({ book, delete: handleRemoveBook }) => (
  <div className={`${book.visible ? 'table book-panel' : 'd-none'}`}>
    <div className="book-info">
      <div className="book-category">
        {book.category}
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-id">
        {`Book ID: ${book.id}`}
      </div>
      <div className="actions">
        <span>Comments</span>
        <span>Remove</span>
        <span>Edit</span>
      </div>
    </div>
    <i className="Oval-2" />
    <div className="book-info">
      <span className="percentage">64%</span>
      <span className="completed">Completed</span>
    </div>
    <div>
      <button type="button" onClick={() => handleRemoveBook(book)}>
        Remove book
        <i className="fa fa-trash" />
      </button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
  }).isRequired,
  delete: PropTypes.func.isRequired,
};

export default Book;
