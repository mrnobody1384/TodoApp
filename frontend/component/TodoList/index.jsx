import React, { useState, useEffect, useContext } from "react";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";
import { TasksContext } from "../context/TasksContext";
export default function TodoList(props) {
  // const [tasks, settasks] = useState([]);
  const { tasks } = useContext(TasksContext);

  console.log(tasks);
  return (
    <div className={styles.main}>
      {tasks.length > 0 ? (
        tasks.map((todo) => {
          return (
            <Todo
              title={todo.title}
              body={todo.body}
              key={todo._id}
              _id={todo.id}
              showDelete={props.showDelete}
            />
          );
        })
      ) : (
        <div className={styles.noTask}>
          <div>
            <div className={styles.border}></div>
            <h2 style={{ color: "#f0e3ca" }}>خالی</h2>
            <div className={styles.border}> </div>
          </div>
        </div>
      )}
    </div>
  );
}
