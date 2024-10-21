import { useState } from "react";
import TodoList from "../component/TodoList";
import AddTodo from "../component/AddTodo";

function App() {
  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  );
}

export default App;
