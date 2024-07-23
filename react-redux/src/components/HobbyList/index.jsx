import { useSelector } from 'react-redux';

const HobbyList = () => {
  const hobbies = useSelector((state) => state.hobby.list);

  return (
    <div>
      <h2>Hobby List:</h2>
      <ul>
        {hobbies?.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default HobbyList;
