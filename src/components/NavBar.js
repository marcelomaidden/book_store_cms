import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter';
import '../stylesheets/NavBar.css';
import { CHANGE_FILTER, CHANGE_VISIBILITY } from '../actions';

const NavBar = ({ handleChangeFilter: changeFilter, handleVisibility: changeVisibity }) => {
  const handleFilter = e => {
    changeFilter(e.target.value);
    changeVisibity(e.target.value);
  };
  return (
    <nav>
      <div className="nav-links">
        <h1 className="title"><Link to="/">BookStore CMS</Link></h1>
        <h2 className="books"><Link to="/books">BOOKS</Link></h2>
        <h2 className="categories"><CategoryFilter handleFilter={handleFilter} /></h2>
      </div>
      <span className="login"><Link to="/login" className="fa fa-user-circle" /></span>
    </nav>
  );
};

NavBar.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
  handleVisibility: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleChangeFilter: filter => (dispatch({ type: CHANGE_FILTER, filter })),
  handleVisibility: filter => (dispatch({ type: CHANGE_VISIBILITY, filter })),
});

export default connect(null, mapDispatchToProps)(NavBar);
