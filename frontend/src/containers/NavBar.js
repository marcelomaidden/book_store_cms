import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from '../components/CategoryFilter';
import '../stylesheets/NavBar.css';
import { CHANGE_FILTER, CHANGE_VISIBILITY } from '../actions';

const NavBar = ({ credentials, handleChangeFilter: changeFilter, handleVisibility: changeVisibity }) => {
  const [user, setUser] = useState('');

  useEffect(() => {
    (async() => {
      const result = await credentials;
      setUser(result.user);
    })();
  }, [credentials.user])
  const handleFilter = e => {
    changeFilter(e.target.value);
    changeVisibity(e.target.value);
  };
  return (
    <nav className="d-flex flex-column flex-md-row">
      <div className="nav-links d-flex flex-column flex-md-row">
        <h1 className="title"><Link to="/">BookStore CMS</Link></h1>
        <h2 className="books"><Link to="/books">BOOKS</Link></h2>
        <h2 className="categories"><CategoryFilter handleFilter={handleFilter} /></h2>
      </div>
      <span className="login">
        <Link to={`${user === '' ? '/login' : '/'}`} className="fa fa-user-circle" />
        {`${user === '' ? '' : user}`}
      </span>
    </nav>
  );
};

NavBar.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
  handleVisibility: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  credentials: state.credentials,
})

const mapDispatchToProps = dispatch => ({
  handleChangeFilter: filter => (dispatch({ type: CHANGE_FILTER, filter })),
  handleVisibility: filter => (dispatch({ type: CHANGE_VISIBILITY, filter })),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
