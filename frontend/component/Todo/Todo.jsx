import React, { useState } from "react";
import TodoOption from "../TodoOption/TodoOption";
export default function Todo(props) {
  const [optionState, setOptionState] = useState(false);
  const [ShowDelete, setShowDelete] = useState(false);
  return (
    <div>
      <div className="main" onClick={() => setOptionState(!optionState)}>
        <div className="taskBody">
          <div className="texts">
            <h2 className="title">{props.title}</h2>
            <h4 className="body">{props.body}</h4>
          </div>
          <div className="deleteButton">
            <button type="button"></button>
          </div>
        </div>
      </div>
      {optionState && <TodoOption />}
    </div>
  );
}
