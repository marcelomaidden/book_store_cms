import PropTypes from 'prop-types';
import React, { useState } from 'react';

const CATEGORIES = [
  { key: 0, name: 'Action' },
  { key: 1, name: 'Biography' },
  { key: 2, name: 'History' },
  { key: 3, name: 'Horror' },
  { key: 4, name: 'Kids' },
  { key: 5, name: 'Learning' },
  { key: 6, name: 'Sci-Fi' },
];

const BooksForm = ({ create }) => {
  const [book, setBook] = useState({ title: '', category: '' });

  const handleChange = e => {
    if (e.target.id === 'inputTitle') {
      setBook({ ...book, title: e.target.value });
    } else {
      setBook({ ...book, category: e.target.value });
    }
  };

  const handleSubmit = () => {
    create(book);
    setBook({ title: '', category: '' });
  };

  return (
    <form className="row g-3">
      <div className="col-md-4">
        <label htmlFor="inputTitle" className="form-label">
          Title
          <input type="text" placeHolder="Enter the book title" onChange={handleChange} value={book.title} className="form-control" id="inputTitle" />
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

export default BooksForm;
