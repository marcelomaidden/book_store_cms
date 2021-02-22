import { CHANGE_FILTER } from '../actions';

const defaultState = 'ALL';

const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
