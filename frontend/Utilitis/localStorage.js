// utilities/localStorage.js
export function get() {
  const savedTodos = localStorage.getItem("todos");
  console.log("Todos loaded from localStorage:", savedTodos);
  return savedTodos ? JSON.parse(savedTodos) : [];
}

export function set(todos) {
  console.log("Todos saved to localStorage:", todos);
  localStorage.setItem("todos", JSON.stringify(todos));
}
