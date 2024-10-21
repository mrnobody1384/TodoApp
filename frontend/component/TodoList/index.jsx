import React, {useState} from "react";
import Todo from "../Todo/Todo";

const Todos = [
  {
    id: 1,
    name: "m",
    body: "aajdlakjd",
  },
];
export default function TodoList() {

  return (
    <div>
      {Todos.map((todo) => {
        return <Todo title={todo.name} body={todo.body} key={todo.id}/>;
      })}
    </div>
  );
}
