import React, { useState, useContext } from "react";
import styles from "./AddTodo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { TasksContext } from "../context/TasksContext";

const AddTodo = () => {
  const [task, setTaskBody] = useState({ title: "", body: "" });
  const { addTask } = useContext(TasksContext);
  function changeTask(target) {
    setTaskBody({ ...task, [target.name]: target.value });
  }
  async function addTod() {
    if (!task.title) {
      alert("تسک باید عنوان داشته باشد.");
      return;
    }
    console.log("adding");
    let id = await uuidv4();

    let newTask = {
      ...task,
      id,
    };
    addTask(newTask);
    setTaskBody({ title: "", body: "" });
  }
  return (
    <div className={styles.container}>
      <div className={styles.inputs} dir="rtl">
        <input
          className={styles.title}
          placeholder="موضوع ..."
          onChange={(e) => {
            changeTask(e.target);
          }}
          name="title"
          value={task.title}
        />

        <input
          type="text"
          className="body"
          placeholder="توضیحات ..."
          name="body"
          onChange={(e) => {
            changeTask(e.target);
          }}
          value={task.body}
        />
      </div>
      <div className={styles.AddButton}>
        <button type="button" onClick={addTod}>
          <FontAwesomeIcon icon={faPlus} inverse />
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
