import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BookList from './BookList';
import BooksForm from '../components/BooksForm';
import { createBook, deleteBook } from '../actions';

const App = ({ books }) => (
  <div className="App">
    <BookList books={books} />
    <BooksForm />
  </div>
);

App.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({ books: state.books });
const mapDispatchToProps = dispatch => ({
  create: book => dispatch(createBook(book)),
  delete: book => dispatch(deleteBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
