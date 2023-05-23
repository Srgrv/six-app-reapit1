import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [
      //   {
      //     title: "HEllo",
      //     id: new Date().toISOString(),
      //     completed: false,
      //   },
    ],
  },
  reducers: {
    addTodo(state, action) {
      state.list.push({
        title: action.payload.value,
        id: new Date().toISOString(),
        completed: false,
      });
    },
    deleteTodo(state, action) {
      state.list = state.list.filter((todo) => todo.id !== action.payload.id);
    },
    changeTodo(state, action) {
      const change = state.list.find((todo) => todo.id === action.payload.id);
      change.completed = !change.completed;
    },
  },
});

export const { addTodo, deleteTodo, changeTodo } = todoSlice.actions;
export default todoSlice.reducer;
