import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, delete: handleRemoveBook }) => (
  <table className="table">
    <tr>
      <td className="col-3">{book.id}</td>
      <td className="col-3">{book.title}</td>
      <td className="col-3">{book.category}</td>
      <td className="col-3">
        <button type="button" onClick={() => handleRemoveBook(book)}>
          <i className="fa fa-trash" />
        </button>
      </td>
    </tr>
  </table>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  delete: PropTypes.func.isRequired,
};

export default Book;
