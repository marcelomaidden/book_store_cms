import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Book.css';

const Book = ({ book, delete: handleRemoveBook }) => (
  <div className={`${book.visible ? 'book-panel d-flex' : 'd-none'}`}>
    <div className="book-info">
      <div className="book-category">
        {book.category}
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-id">
        {`Book ID: ${book.id}`}
      </div>
      <div className="actions">
        <span className="first">Comments</span>
        <a href="/#" onClick={() => handleRemoveBook(book)}>Remove</a>
        <span className="last">Edit</span>
      </div>
    </div>
    <div className="book-info position-relative">
      <i className="Oval-2 d-none d-md-flex" />
      <span className="percentage">64%</span>
      <span className="completed">Completed</span>
    </div>
    <div className="col d-flex flex-column">
      <span className="completed">CURRENT CHAPTER</span>
      <span className="chapter">Chapter 17</span>
      <button type="button" className="btn btn-update mt-3" onClick={() => handleRemoveBook(book)}>
        Update Progress
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
