import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import TodoList from './components/todo-list';
import Nav from './components/nav';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Nav/>} />
          <Route path='/todo' element={<TodoList/>} />
          <Route path='/flex' element={<TodoList/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
