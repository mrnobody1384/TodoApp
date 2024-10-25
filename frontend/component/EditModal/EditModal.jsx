import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from "./EditModal.module.css";

function EditModal({ modalIsOpen, closeModal, onConfirm, task }) {
  const [title, setTitle] = useState(task?.title || "");
  const [body, setBody] = useState(task?.body || "");

  useEffect(() => {
    setTitle(task?.title || "");
    setBody(task?.body || "");
  }, [task]);

  const handleConfirm = () => {
    onConfirm({ title, body });
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Edit Task"
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
          padding: "20px",
          width: "300px",
        },
      }}
    >
      <div className={styles.modalContent}>
        <div className={styles.inputs}>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            type="text"
            name="body"
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Body"
          />
        </div>
        <div className={styles.btns}>
          <button className={styles.btn} onClick={handleConfirm}>
            تایید
          </button>
          <button className={styles.btn} onClick={closeModal}>
            لغو
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default EditModal;
