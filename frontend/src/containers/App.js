import React from 'react';
import { connect } from 'react-redux';
import BookList from './BookList';
import BooksForm from './BooksForm';
import Login from './Login';

const App = ({ credentials }) => (
  <div className="App">
    {
      credentials.token === '' ? <Login /> : 
      <>
        <BookList />
        <BooksForm />
      </>
    } 
  </div>
);

const mapStateToProps = state => ({
  credentials: state.credentials,
})

export default connect(mapStateToProps, null)(App);
