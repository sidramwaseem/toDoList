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
          onClick={props.toggleClass}
          checked={props.checkClass}
        />
        <label
          htmlFor={props.id}
          className={props.checkClass ? "checked-item" : "unchecked-item"}
          onClick={props.toggleClass}
        >
          {props.text}
        </label>
      </div>
      <img src={DeleteIcon} alt="delete-icon" className="delete-icon" onClick={()=>props.deleteTask(props.id)} />
    </div>
  );
}

export default Task;
