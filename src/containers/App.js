import React from 'react';
import BookList from './BookList';

const App = () => (
  <div className="App">
    <BookList books={[{ id: '1', title: 'Redux', category: 'JavaScript' }]} />
  </div>
);

export default App;
