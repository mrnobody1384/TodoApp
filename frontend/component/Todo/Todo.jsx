import React, { useState, useContext } from "react";
import TodoOption from "../TodoOption/TodoOption";
import styles from "./Todo.module.css";
import EditModal from "../EditModal/EditModal";
import { TasksContext } from "../context/TasksContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
export default function Todo(props) {
  const [optionState, setOptionState] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [task, setTask] = useState({
    id: props._id,
    title: props.title,
    body: props.body,
  });

  const { updateTask } = useContext(TasksContext);

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);
  const handleEditConfirm = (updatedTask) => {
    updateTask(task.id, updatedTask);
    closeEditModal(); // به‌روزرسانی تسک
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.taskBody}>
          <div
            className={styles.texts}
            onClick={() => setOptionState(!optionState)}
          >
            <h2 className={styles.title}>{props.title}</h2>
            <h4 className={styles.body}>{props.body}</h4>
          </div>
          <div className={styles.deleteButton}>
            <button
              type="button"
              onClick={() => {
                props.showDelete(props._id);
              }}
            >
              <FontAwesomeIcon
                icon={faClose}
                inverse
                style={{ color: " #a35709" }}
                size="sm"
                // className="fa-sm"
              />
            </button>
          </div>
        </div>
      </div>
      {optionState && <TodoOption openEditModal={openEditModal} />}
      <EditModal
        modalIsOpen={isEditModalOpen}
        closeModal={closeEditModal}
        onConfirm={handleEditConfirm}
        task={task}
      />
    </div>
  );
}
