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

const BooksForm = () => {
  const [book, setBook] = useState({ title: '', category: '' });

  const handleChange = e => {
    if (e.target.id === 'inputTitle') {
      setBook({ ...book, title: e.target.value });
    } else {
      setBook({ ...book, category: e.target.value });
    }
  };

  return (
    <form className="row g-3">
      <div className="col-md-12">
        { `${book.title} - ${book.category}` }
        <label htmlFor="inputTitle" className="form-label">
          Title
          <input type="text" onChange={handleChange} className="form-control" id="inputTitle" />
        </label>
      </div>
      <div className="col-md-12">
        <label htmlFor="category" className="form-label">
          Category
          <select name="category" onChange={handleChange} className="form-select" id="category">
            {
              CATEGORIES.map(({ key, name }) => <option value={name} key={key}>{name}</option>)
            }
          </select>
        </label>
      </div>
      <div className="col-md-12">
        <button type="button" className="btn btn-primary">Create book</button>
      </div>
    </form>
  );
};

export default BooksForm;
