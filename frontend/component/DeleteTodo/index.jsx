import React, { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import styles from "./DeleteTod.module.css";
export default function DeleteTodo({ closeModal, deleteId }) {
  const { deleteTask } = useContext(TasksContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.head}>از حذف این تسک اطمینان دارید؟</h1>
      <div className={styles.btns}>
        <button
          onClick={() => {
            deleteTask(deleteId);
            closeModal();
          }}
          className={styles.btn}
        >
          بله
        </button>
        <button onClick={closeModal} className={styles.btn}>
          خیر
        </button>
      </div>
    </div>
  );
}
