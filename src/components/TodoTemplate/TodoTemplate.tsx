import './TodoTemplate.scss';
import TodoInput from '../TodoInput';
import TodoList from '../TodoList';
import TodoTitle from '../TodoTitle';

const TodoTemplate = (): JSX.Element => {
  return (
    <div className='TodoTemplate'>
      <div className='TodoTemplate-Contents'>
        <TodoTitle />
        <TodoList />
        <TodoInput />
      </div>
    </div>
  );
};

export default TodoTemplate;
