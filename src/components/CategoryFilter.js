import React from 'react';

export const CATEGORIES = [
  { key: 0, name: 'Action' },
  { key: 1, name: 'Biography' },
  { key: 2, name: 'History' },
  { key: 3, name: 'Horror' },
  { key: 4, name: 'Kids' },
  { key: 5, name: 'Learning' },
  { key: 6, name: 'Sci-Fi' },
];

const CategoryFilter = () => (
  <label htmlFor="filterCategories" className="form-label">
    Filter category
    <select name="filterCategories" id="filterCategories" className="form-select">
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

export default CategoryFilter;
