//packages
import React from "react";
import { useDispatch } from "react-redux";

//actions
import { deleteTodo, changeTodo } from "../../store/todoSlice/todoSlice";

export const Todo = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <input
        type={"checkbox"}
        checked={completed}
        onChange={() => dispatch(changeTodo({ id }))}
      />
      <span>{title}</span>
      <span onClick={() => dispatch(deleteTodo({ id }))}>&times;</span>
    </li>
  );
};

export default Todo;
