import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import { createBook } from '../actions';
import { CATEGORIES } from '../components/CategoryFilter';
import '../stylesheets/BooksForm.css';

const BooksForm = ({ create }) => {
  const [book, setBook] = useState({ title: '', category: '' });

  const handleChange = e => {
    if (e.target.id === 'inputTitle') {
      setBook({ ...book, title: e.target.value, invalid: false });
    } else {
      setBook({ ...book, category: e.target.value });
    }
  };

  const handleSubmit = () => {
    if (book.title === '') {
      setBook({ ...book, invalid: true });
    } else {
      create(book);
      setBook({ title: '', category: '', invalid: false });
    }
  };

  return (
    <form className="row g-3 form-book">
      <h1 className="add-book col-12">ADD NEW BOOK</h1>
      <div className="col-md-6">
        <input
          type="text"
          placeHolder="Enter the book title"
          onChange={handleChange}
          value={book.title}
          className={`form-control ${book.invalid ? 'is-invalid' : ''}`}
          id="inputTitle"
        />
      </div>
      <div className="col-md-3">
        <select name="category" onChange={handleChange} className="form-select" id="category">
          {
            CATEGORIES.map(({ key, name }) => <option value={name} key={key}>{name}</option>)
          }
        </select>
      </div>
      <div className="col-md-1">
        <button type="button" onClick={handleSubmit} className="btn btn-create">Create book</button>
      </div>
    </form>
  );
};

BooksForm.propTypes = {
  create: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  create: book => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
