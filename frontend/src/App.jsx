import Modal from "react-modal";
import TodoList from "../component/TodoList";
import AddTodo from "../component/AddTodo/AddTodo";
import DeleteTodo from "../component/DeleteTodo";
import React, { useState, useEffect } from "react";
import { TasksProvider } from "../component/context/TasksContext";

import "./app.css";

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  function showDelete(id) {
    setIsOpen(true);
    setDeleteId(id);
    return;
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <TasksProvider>
        <Modal
          isOpen={modalIsOpen}
          contentLabel=""
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#1B1A17",
              borderTop: "8px solid #A35709",
              borderRadius: "10px",
            },
          }}

          // closeTimeoutMS={5}
        >
          <DeleteTodo closeModal={closeModal} deleteId={deleteId} />
        </Modal>
        <div className="Main">
          <AddTodo />
          <TodoList showDelete={showDelete} />
        </div>
      </TasksProvider>
    </>
  );
}

export default App;
