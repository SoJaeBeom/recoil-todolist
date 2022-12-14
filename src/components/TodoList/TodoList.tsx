import { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  filteredTodoListState,
  ITodoTypes,
  todosState,
} from '../../recoil/todo';
import TodoItem from './TodoItem';
import './TodoList.scss';

const TodoList = (): JSX.Element => {
  const [todos, setTodos] = useRecoilState<ITodoTypes[]>(todosState);
  const todoList = useRecoilValue<ITodoTypes[]>(filteredTodoListState);

  const onComplete = useCallback(
    (id: number): void => {
      setTodos(
        todos.map((todo: ITodoTypes) => {
          return todo.id === id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo;
        })
      );
    },
    [setTodos, todos]
  );

  const onDelete = useCallback(
    (id: number): void => {
      setTodos(todos.filter((todo: ITodoTypes) => todo.id !== id));
    },
    [setTodos, todos]
  );

  return (
    <div className='TodoList'>
      {todoList.length > 0 ? (
        todoList.map((todo: ITodoTypes) => {
          const { id, contents, isCompleted } = todo;
          return (
            <TodoItem
              key={id}
              id={id}
              contents={contents}
              isCompleted={isCompleted}
              onComplete={onComplete}
              onDelete={onDelete}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })
      ) : (
        <div className='TodoList-NoList'>
          Todo가 없습니다. 자유롭게 추가해보세요!
        </div>
      )}
    </div>
  );
};
export default TodoList;
