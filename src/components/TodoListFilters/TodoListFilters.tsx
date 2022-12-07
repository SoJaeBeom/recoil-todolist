import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../../recoil/todo';

interface IProps {
  target: {
    value: string;
  };
}

const TodoListFilters = (): JSX.Element => {
  const [filter, setFilter] = useRecoilState<string>(todoListFilterState);

  const updateFilter = ({ target: { value } }: IProps) => {
    setFilter(value);
  };

  return (
    <>
      <select value={filter} onChange={updateFilter}>
        <option value='Show All'>All</option>
        <option value='Show Completed'>Completed</option>
        <option value='Show Uncompleted'>Uncompleted</option>
      </select>
    </>
  );
};

export default TodoListFilters;
