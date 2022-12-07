import './TodoTitle.scss';
import { GiWireCoil } from 'react-icons/gi';
import TodoListFilters from '../TodoListFilters';

const TodoTitle = (): JSX.Element => {
  return (
    <div className='TodoTitle'>
      <GiWireCoil className='TodoTitle-Icon' />
      <div className='TodoTitle-Title'>TodoList With Recoil</div>
      <GiWireCoil className='TodoTitle-Icon' />
      <TodoListFilters />
    </div>
  );
};

export default TodoTitle;
