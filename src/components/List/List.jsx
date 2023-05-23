//packages
import React from "react";
import { useSelector } from "react-redux";

//components
import Todo from "../Todo/Todo";

export const List = () => {
  const list = useSelector((state) => state.todos.list);

  return (
    <div>
      <ul>
        {list.map((todo) => {
          return <Todo key={todo.id} {...todo} />;
        })}
      </ul>
    </div>
  );
};

export default List;
