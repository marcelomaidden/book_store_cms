export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';

export const createBook = book => ({ type: CREATE_BOOK, book });
export const deleteBook = book => ({ type: REMOVE_BOOK, book });
export const changeFilter = filter => ({ type: CHANGE_FILTER, filter });
export const changeVisibility = filter => ({ type: CHANGE_VISIBILITY, filter });
