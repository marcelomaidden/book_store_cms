import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from '../components/CategoryFilter';
import '../stylesheets/NavBar.css';
import { CHANGE_FILTER, CHANGE_VISIBILITY, signOut } from '../actions';

const NavBar = ({ credentials, signOut, handleChangeFilter: changeFilter, handleVisibility: changeVisibity }) => {
  const handleFilter = e => {
    changeFilter(e.target.value);
    changeVisibity(e.target.value);
  };
  return (
    <nav className="d-flex flex-column flex-md-row justify-content-between">
      <div className="nav-links d-flex flex-column flex-md-row">
        <h1 className="title"><Link to="/">BookStore CMS</Link></h1>
        <h2 className="books"><Link to="/books">BOOKS</Link></h2>
        <h2 className="categories"><CategoryFilter handleFilter={handleFilter} /></h2>
      </div>
      <div className = 'd-flex'>
        <div className="login">
          <Link to={`${credentials.user === '' || 
          credentials.user === undefined ? '/login' : '/'}`} 
          className="fa fa-user-circle" />
        </div>
        <div className="d-flex flex-column">
            {`${credentials.user === '' || credentials.user === undefined ? '' : credentials.user.name}`}
            {credentials.user !== '' && credentials.user !== undefined ? 
            <Link to="/signout" onClick={signOut}>Sign out</Link> : ''}
        </div>
      </div>
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
  signOut: () => (dispatch(signOut())),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
