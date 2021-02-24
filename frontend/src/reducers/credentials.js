import { CHECK_CREDENTIALS, SET_CREDENTIALS } from '../actions';
import API_ROOT from '../apiRoot';

const defaultState = {
  token: '',
  checked: false,
  logged: false,
};

const check = async(token) => {
  const result = await fetch(`${API_ROOT}check_credentials`, {
    method: 'post',
    mode: 'cors',
    headers: {"Content-type": "application/json;charset=UTF-8"},
    body: JSON.stringify({ "token": token }) 
  })
  .then(result => result.json())
  .then(data => {
    return { token: data.token, checked: true }
  });
  return result;
}

const login = async(username, password) => {
  let credentials = { email: username, password };
  credentials = JSON.stringify(credentials);
  const result = await fetch(`${API_ROOT}sign_in`, {
    method: 'post',
    mode: 'cors',
    headers: {"Content-type": "application/json;charset=UTF-8"},
    body: credentials,
  })
  .then(result => result.json())
  .then(data => {
    if (data.token !== 'Invalid credentials')
      return { token: data.token, checked: false, logged: true }
    return { token: data.token, checked: true, logged: false }
  })
  return result;
}

const credentials_reducer = (state = defaultState, action) => {
  switch(action.type) {
    case CHECK_CREDENTIALS:
      return check(action.token);
    case SET_CREDENTIALS:
      return login(action.username, action.password);
    default:
      return state;
  }
};

export default credentials_reducer;