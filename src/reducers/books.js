import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

export const getRandomIntInclusive = (minimum, maximum) => {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const defaultState = [
  {
    id: getRandomIntInclusive(1, 1000),
    title: 'Star Wars',
    category: 'Sci-Fi',
    visible: true,
  },
  {
    id: getRandomIntInclusive(1, 1000),
    title: 'Alien',
    category: 'Sci-Fi',
    visible: true,
  },
  {
    id: getRandomIntInclusive(1, 1000),
    title: 'Freddie Krugger',
    category: 'Horror',
    visible: true,
  },
];

const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state, {
          id: getRandomIntInclusive(1, 1000),
          title: action.book.title,
          category: action.book.category,
          visible: true,
        },
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.book.id);
    default:
      return state;
  }
};

export default booksReducer;
