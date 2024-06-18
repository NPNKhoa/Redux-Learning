const initialState = {
  hobbyList: [],
  activeId: null,
};

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
        const newHobby = [...state.hobbyList];
        newHobby.push(action.payload);
        
        return {
            ...state,
            hobbyList: newHobby,
        };
    case 'SET_ACTIVE_HOBBY':
      return state;
    default:
      return state;
  }
};

export default hobbyReducer;
