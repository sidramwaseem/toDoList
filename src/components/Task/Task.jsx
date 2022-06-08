import React from "react";
import DeleteIcon from "../../assets/delete-icon.png";
import "./Task.css";

function Task(props) {

  const [check, setCheck] = React.useState(false);
  
  function reverse(spec) {
    let temp = spec.isCheck;
    spec.isCheck = !temp;
    setCheck(spec.isCheck);
    console.log("xxxxxxxxxxxxxx", spec);
  }
  return (
    <div className="task-container">
      <div className="task-container_check">
        <input
          type="checkbox"
          id={props.index}
          onChange={props.handleCheck}
          onClick={() => reverse(props.task)}
        />
        <label
          htmlFor={props.index}
          className={check ? "checked-item" : "unchecked-item"}
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
