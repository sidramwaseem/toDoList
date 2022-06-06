import React from "react";
import DeleteIcon from "../../assets/delete-icon.png";
import "./Task.css";

function Task(props) {
  return (
    <div className="task-container">
      <div className="task-container_check">
        <input
          type="checkbox"
          id={props.index}
          checked={props.checkClass}
          onChange={props.handleCheck}
          onClick={() => props.toggleClass(props.index)}
        />
        <label
          htmlFor={props.index}
          className={props.checkClass ? "checked-item" : "unchecked-item"}
        >
          <span>{props.text}</span>
        </label>
      </div>
      <img
        src={DeleteIcon}
        alt="delete-icon"
        className="delete-icon"
        onClick={() => props.deleteTask(props.id)}
      />
    </div>
  );
}

export default Task;
