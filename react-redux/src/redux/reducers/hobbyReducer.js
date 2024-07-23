const initialState = {
  list: [],
  activeId: '',
};

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HOBBY': {
      const newList = [...state.list];
      newList.push(action.payload);
      return {
        ...state,
        list: newList,
      };
    }
    case 'REMOVE_HOBBY':
      return state;
    case 'SET_ACTIVE_HOBBY':
      return state;
    default:
      return state;
  }
};

export default hobbyReducer;
