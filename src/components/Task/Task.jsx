import React from "react";
import DeleteIcon from "../../assets/delete-icon.png";
import "./Task.css";

function Task(props) {
  return (
    <div className="task-container">
      <div className="task-container_check">
        <input type="checkbox" name="checkbox" id={props.id} checked={props.isDone} />
        <label htmlFor={props.id}>{props.text}</label>
      </div>
      <img src={DeleteIcon} alt="delete-icon" className="delete-icon" />
    </div>
  );
}

export default Task;
