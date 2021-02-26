import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import BookList from './BookList';
import BooksForm from './BooksForm';
import { checkCredentials } from '../actions';

const App = ({ credentials, check }) => {
  const [token, setToken] = useState(credentials.token);
  const history = useHistory()

  useEffect(() => {
    if (!credentials.checked){
      (async() => {
        check(credentials.token);
        const result = await credentials;
        setToken("Checking credentials")

        setTimeout(() => {
          if (result.token === 'Invalid credentials')
            setToken('Invalid credentials');
        }, 3000);
        setToken(result.token);
      })()
    }
  }, [credentials.checked]);
  return (
  <div className="App">
    {
      token === 'Invalid credentials' || token === '' ? 
      history.push('/login') : 
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
