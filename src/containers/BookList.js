import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import {
  CHANGE_FILTER,
  CHANGE_VISIBILITY,
  deleteBook,
} from '../actions';

const BookList = ({
  books,
  delete: handleRemoveBook,
  handleChangeFilter,
  handleVisibility,
}) => {
  const handleFilter = e => {
    handleChangeFilter(e.target.value);
    handleVisibility(e.target.value);
  };
  return (
    <div>
      <CategoryFilter handleFilter={handleFilter} />
      {
        books.map(
          book => <Book book={book} key={book.id} delete={handleRemoveBook} />,
        )
      }
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  delete: PropTypes.func.isRequired,
  handleVisibility: PropTypes.func.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ books: state.books });

const mapDispatchToProps = dispatch => ({
  delete: book => dispatch(deleteBook(book)),
  handleChangeFilter: filter => (dispatch({ type: CHANGE_FILTER, filter })),
  handleVisibility: filter => (dispatch({ type: CHANGE_VISIBILITY, filter })),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
