import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';
import credentials_reducer from './credentials';

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
  credentials: credentials_reducer,
});

export default rootReducer;
