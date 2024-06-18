import React, { useState, } from 'react';
import { useDispatch } from 'react-redux';
import { addNewHobby } from '../../redux/actions/hobby';
import { v4 as uuidv4 } from 'uuid';

const AddHobbyForm = () => {
    const [hobby, setHobby] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewHobby({
            id: uuidv4(),
            title: hobby,
        }));
    }

    return (
      <div>
        <h2>Add your food here</h2>
        <form>
          <input
            type='text'
            style={{ marginRight: '2em' }}
            onChange={(e) => setHobby(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    );
};

AddHobbyForm.propTypes = {

};

export default AddHobbyForm;