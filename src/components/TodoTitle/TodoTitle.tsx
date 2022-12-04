import './TodoTitle.scss';
import { GiWireCoil } from 'react-icons/gi';

const TodoTitle = (): JSX.Element => {
  return (
    <div className='TodoTitle'>
      <GiWireCoil className='TodoTitle-Icon' />
      <div className='TodoTitle-Title'>TodoList With Recoil</div>
    </div>
  );
};

export default TodoTitle;
