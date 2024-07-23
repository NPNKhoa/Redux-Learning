import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';

const TodoInput = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const handleSubmit = (payload) => {
    if (!payload || payload === '') return;

    const action = addTodo(payload);
    dispatch(action);
    setTodo('');
  };

  return (
    <div>
      <input
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => handleSubmit(todo)}>Add</button>
    </div>
  );
};

export default TodoInput;
