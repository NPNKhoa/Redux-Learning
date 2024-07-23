import { useDispatch } from 'react-redux';
import { addHobby } from '../../redux/actions/hobby';
import { useState } from 'react';

const InputHobby = () => {
  const dispatch = useDispatch();
  const [hobby, setHobby] = useState('');

  const handleSubmit = (payload) => {
    if (!payload || payload === '') return;
    dispatch(addHobby(payload));
    setHobby('');
  };

  return (
    <div>
      Input hobby:{' '}
      <input
        type='text'
        value={hobby}
        onChange={(e) => setHobby(e.target.value)}
      />
      <button onClick={() => handleSubmit(hobby)}>Add</button>
    </div>
  );
};

export default InputHobby;
