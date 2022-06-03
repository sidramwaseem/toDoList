import React from "react";
import DeleteIcon from "../../assets/delete-icon.png";
import "./Task.css";

function Task(props) {

  const [checkClass, setCheckClass] = React.useState(false);
  function toggleClass() {
    setCheckClass((prevState) => !prevState);
  }

  return (
    <div className="task-container">
      <div className="task-container_check">
        <input
          type="checkbox"
          name="checkbox"
          id={props.id}
          onChange={props.handleCheck}
          onClick={toggleClass}
        />
        <label
          htmlFor={props.id}
          className={checkClass ? "checked-item" : "unchecked-item"}
        >
          {props.text}
        </label>
      </div>
      <img src={DeleteIcon} alt="delete-icon" className="delete-icon" onClick={()=>props.deleteTask(props.id)} />
    </div>
  );
}

export default Task;
