import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import './styles/color.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<TodoTemplate />} />
    </Routes>
  );
}

export default App;
