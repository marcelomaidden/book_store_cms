import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { deleteBook } from '../actions';

const BookList = ({ books, delete: handleRemoveBook }) => (
  <div>
    <CategoryFilter />
    {
      books.map(
        book => <Book book={book} key={book.id} delete={handleRemoveBook} />,
      )
    }
  </div>
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

const mapStateToProps = state => ({ books: state.books });

const mapDispatchToProps = dispatch => ({
  delete: book => dispatch(deleteBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
