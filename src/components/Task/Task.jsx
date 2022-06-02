import React from "react";
import DeleteIcon from "../../assets/delete-icon.png";
import "./Task.css";


function Task(props) {
  const [checked,setChecked] = React.useState(false);

  function onChecked(){
    setChecked(prevState => !prevState)
  }

  return (
    <div className="task-container">
      <div className="task-container_check">
        <input type="checkbox" name="checkbox" id={props.id} checked={checked} onChange={onChecked} />
        <label htmlFor={props.id}>{props.text}</label>
      </div>
      <img src={DeleteIcon} alt="delete-icon" className="delete-icon" />
    </div>
  );
}

export default Task;
