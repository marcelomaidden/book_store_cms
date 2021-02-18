import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CHANGE_FILTER, CHANGE_VISIBILITY } from '../actions';

export const CATEGORIES = [
  { key: 0, name: 'Action' },
  { key: 1, name: 'Biography' },
  { key: 2, name: 'History' },
  { key: 3, name: 'Horror' },
  { key: 4, name: 'Kids' },
  { key: 5, name: 'Learning' },
  { key: 6, name: 'Sci-Fi' },
];

const CategoryFilter = ({ changeFilter, changeVisibility }) => {
  const handleFilter = e => {
    changeFilter(e.target.value);
    changeVisibility(e.target.value);
  };
  return (
    <label htmlFor="filterCategories" className="form-label">
      Filter category
      <select name="filterCategories" onChange={handleFilter} id="filterCategories" className="form-select">
        <option value="All">All</option>
        {
          CATEGORIES.map(category => (
            <option value={category.name} key={category.key}>
              {category.name}
            </option>
          ))
        }
      </select>
    </label>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  changeVisibility: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => (dispatch({ type: CHANGE_FILTER, filter })),
  changeVisibility: filter => (dispatch({ type: CHANGE_VISIBILITY, filter })),
});

export default connect(null, mapDispatchToProps)(CategoryFilter);
