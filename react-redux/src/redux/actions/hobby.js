export const addHobby = (payload) => {
  return {
    type: 'ADD_HOBBY',
    payload,
  };
};

export const removeHobby = (payload) => {
  return {
    type: 'REMOVE_HOBBY',
    payload,
  };
};

export const setActiveHobby = (payload) => {
  return {
    type: 'SET_ACTIVE_HOBBY',
    payload,
  };
};
