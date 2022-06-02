import React from "react";
import DeleteIcon from "../../assets/delete-icon.png";
import "./Task.css";

function Task(props) {


  return (
    <div className="task-container">
      <div className="task-container_check">
        <input
          type="checkbox"
          name="checkbox"
          id={props.id}
          onChange={props.handleCheck}
        />
        <label htmlFor={props.id} className={props.isChecked(props.task.text)}>{props.text}</label>
      </div>
      <img src={DeleteIcon} alt="delete-icon" className="delete-icon" />
    </div>
  );
}

export default Task;
