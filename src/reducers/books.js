import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const state = [
  { id: getRandomIntInclusive(1, 1000), title: 'Redux', category: 'JavaScript' },
  { id: getRandomIntInclusive(1, 1000), title: 'React', category: 'JavaScript' },
  { id: getRandomIntInclusive(1, 1000), title: 'Rails', category: 'Ruby' },
  { id: getRandomIntInclusive(1, 1000), title: 'Ruby', category: 'Ruby' },
];

const booksReducer = (state, action) => {
  switch(action.type) {
    case CREATE_BOOK:
      return {...state, book: action.book }
    case REMOVE_BOOK:
      return state;
    default:
      return state;
  }
};

export default booksReducer;