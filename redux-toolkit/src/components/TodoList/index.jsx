import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../../redux/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos);

  const handleClickTodo = (index) => {
    const action = removeTodo(index);
    dispatch(action);
  };

  return (
    <div>
      <ul>
        {todoList.map((todo, index) => (
          <li
            key={index}
            onClick={() => handleClickTodo(index)}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
