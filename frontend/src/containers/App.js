import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import BookList from './BookList';
import BooksForm from './BooksForm';
import Login from './Login';
import { checkCredentials } from '../actions';

const App = ({ credentials, check }) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    if (!credentials.checked){
      (async() => {
        check(credentials.token);
        const result = await credentials;
        
        setToken(result.token);
      })()
    }
  }, [credentials.checked]);
  return (
  <div className="App">
    {
      token === 'Invalid credentials' || token === undefined ? <Login /> : 
      <>
        <BookList />
        <BooksForm />
      </>
    } 
  </div>
  );
}

const mapStateToProps = state => ({
  credentials: state.credentials,
});

const mapDispatchToProps = dispatch => ({
  check: token => dispatch(checkCredentials(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
