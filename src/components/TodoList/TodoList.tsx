import './TodoList.scss';

const TodoList = (): JSX.Element => {
  return (
    <div className='TodoList'>
      <div className='TodoList-NoList'>
        Todo가 없습니다. 자유롭게 추가해보세요!
      </div>
    </div>
  );
};
export default TodoList;
