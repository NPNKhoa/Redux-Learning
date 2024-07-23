import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    removeTodo(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

const { actions, reducer } = todoSlice;
export const { addTodo, removeTodo } = actions;
export default reducer;
