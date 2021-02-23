import { CHECK_CREDENTIALS, SET_CREDENTIALS } from '../actions';

const defaultState = {
  token: ''
};

const credentials_reducer = (state = defaultState, action) => {
  switch(action.type) {
    case CHECK_CREDENTIALS:
      return state;
    case SET_CREDENTIALS:
      return { ...state, token: action.token };
    default:
      return state;
  }
};

export default credentials_reducer;