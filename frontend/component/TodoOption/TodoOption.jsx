import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faInfo, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import styles from "./TodoOption.module.css";
export default function TodoOption({ openEditModal }) {
  return (
    <div className={styles.container}>
      <button className={styles.button} type="button" onClick={openEditModal}>
        <FontAwesomeIcon icon={faPen} inverse />
      </button>
      <button className={styles.button} type="button">
        <FontAwesomeIcon icon={faInfo} inverse />
      </button>
      <button className={styles.button} type="button">
        <FontAwesomeIcon icon={faShareNodes} inverse />
      </button>
    </div>
  );
}
