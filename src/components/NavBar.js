import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/NavBar.css';

const NavBar = () => (
  <nav>
    <h1 className="title col-5"><Link to="/">BookStore CMS</Link></h1>
    <h2 className="books col-2"><Link to="/books">BOOKS</Link></h2>
    <h2 className="categories col-2"><Link to="/categories">CATEGORIES</Link></h2>
    <span className="login"><Link to="/login" className="fa fa-user-circle" /></span>
  </nav>
);

export default NavBar;
