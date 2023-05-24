//packages
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
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
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, () => {
      console.log("pending");
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.list = action.payload;
      console.log("fullfilled");
    });
    builder.addCase(fetchTodos.rejected, () => {
      console.log("rejected");
    });
  },
});

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, { rejectWithValue, dispatch }) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return response.data;
  }
);
export const { addTodo, deleteTodo, changeTodo } = todoSlice.actions;
export default todoSlice.reducer;
