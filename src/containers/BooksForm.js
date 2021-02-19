import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import { createBook } from '../actions';
import { CATEGORIES } from '../components/CategoryFilter';

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
    <form className="row g-3">
      <div className="col-md-4">
        <label htmlFor="inputTitle" className="form-label">
          Title
          <input
            type="text"
            placeholder="Enter the book title"
            onChange={handleChange}
            value={book.title}
            className={`form-control ${book.invalid ? 'is-invalid' : ''}`}
            id="inputTitle"
          />
        </label>
      </div>
      <div className="col-md-4">
        <label htmlFor="category" className="form-label">
          Category
          <select name="category" onChange={handleChange} className="form-select" id="category">
            {
              CATEGORIES.map(({ key, name }) => <option value={name} key={key}>{name}</option>)
            }
          </select>
        </label>
      </div>
      <div className="col-md-4">
        <button type="button" onClick={handleSubmit} className="btn btn-primary">Create book</button>
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
