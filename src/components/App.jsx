//packages
import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

//actions
import { addTodo } from "../store/todoSlice/todoSlice";

//styles
import "../style/App.css";

//componenets
import Field from "./Field/Field";
import List from "./List/List";

export const App = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ value }));
    setValue("");
  };

  return (
    <div>
      <Field addTodo={addTask} value={value} setValue={setValue} />
      <List />
    </div>
  );
};

export default App;
