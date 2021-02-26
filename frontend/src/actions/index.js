import API_ROOT from '../apiRoot';
export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';
export const CHECK_CREDENTIALS = 'CHECK_CREDENTIALS';
export const SET_CREDENTIALS = 'SET_CREDENTIALS';
export const GET_CREDENTIALS = 'GET_CREDENTIALS';
export const CREATE_USER = 'CREATE_USER';
export const SIGN_OUT = 'SIGN_OUT';

export const createBook = book => ({ type: CREATE_BOOK, book });
export const deleteBook = book => ({ type: REMOVE_BOOK, book });
export const changeFilter = filter => ({ type: CHANGE_FILTER, filter });
export const changeVisibility = filter => ({ type: CHANGE_VISIBILITY, filter });
export const signOut = () => ({ type: SIGN_OUT });
export const checkCredentials = token => {
  return dispatch => {
      fetch(`${API_ROOT}check_credentials`, {
        method: 'post',
        mode: 'cors',
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify({ "token": token }) 
    })
    .then(result => result.json())
    .then(data => {
      if (data.token === 'Invalid credentials')
        dispatch({ type: SET_CREDENTIALS, data: { token: data.token, user: '' }})
      else
        dispatch({ type: GET_CREDENTIALS })
    });
  }
};

export const createUser = (name, email, password) => {
  return dispatch => {
    let user = { user: { name, email, password } };
    user = JSON.stringify(user);
    return fetch(`${API_ROOT}users`, {
      method: 'post',
      mode: 'cors',
      headers: {"Content-type": "application/json;charset=UTF-8"},
      body: user,
    })
    .then(result => result.json())
    .then(data => {
      if (data.token === 'User not created')
        dispatch({ type: SET_CREDENTIALS, data: { token: data.token, user: '' } })
      dispatch({type: SET_CREDENTIALS, data: { token: data.token, user: data.user } })
    });
  } 
};

export const setCredentials = (username, password) => {
  return dispatch => {
    dispatch({ type: GET_CREDENTIALS});
    let credentials = { email: username, password };
    credentials = JSON.stringify(credentials);
    return fetch(`${API_ROOT}sign_in`, {
        method: 'post',
        mode: 'cors',
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: credentials,
      })
      .then(result => result.json())
      .then(data => {
        dispatch({ type: SET_CREDENTIALS, data: { token: data.token, user: data.user } })
      });
    };
};