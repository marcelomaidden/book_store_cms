export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

const actionCreator = (type, book) => {
  switch (type) {
    case CREATE_BOOK:
      return { type: CREATE_BOOK, book };
    case REMOVE_BOOK:
      return { type: REMOVE_BOOK, book };
    default:
      return { type: 'Invalid option' };
  }
};

export default actionCreator;
