import { GET_CREDENTIALS, SET_CREDENTIALS, SIGN_OUT } from '../actions';

const defaultState = {
  token: '',
  user: '',
};

const credentials_reducer = (state = defaultState, action) => {
  switch(action.type) {
    case GET_CREDENTIALS:
      return state;
    case SET_CREDENTIALS:
      return { ...state, token: action.data.token, user: action.data.user };
    case SIGN_OUT:
      return defaultState;
    default:
      return state;
  }
};

export default credentials_reducer;