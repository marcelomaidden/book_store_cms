import { combineReducers } from 'react-redux';
import booksReducer from './books';

const rootReducer = combineReducers({
  books: booksReducer,
});

export default rootReducer;

