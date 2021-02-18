import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../actions';

const Book = ({ book, delete: handleDelete }) => (
  <>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      <button type="button" onClick={() => handleDelete(book)}>
        <i className="fa fa-trash" />
      </button>
    </td>
  </>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  delete: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  delete: book => dispatch(deleteBook(book)),
});

export default connect(null, mapDispatchToProps)(Book);
