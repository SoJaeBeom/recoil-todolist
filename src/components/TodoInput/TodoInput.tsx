import React from 'react';
import { FaPen } from 'react-icons/fa';
import './TodoInput.scss';

const TodoInput = (): JSX.Element => {
  return (
    <div className='TodoInput'>
      <input
        type='text'
        className='TodoInput-Input'
        placeholder='Todo를 입력해보세요!'
      />
      <FaPen className='TodoInput-Button' />
    </div>
  );
};

export default TodoInput;
