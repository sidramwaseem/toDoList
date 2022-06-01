import React from "react";
import Task from "../Task/Task.jsx";
import "./TaskList.css";

function TaskList(props) {
  return (
    <div className="tasklist-container">
      <div className="tasklist-conatiner_tasklist">
        {props.task.map((task) => (
          <Task key={task.key} text={task.text} id={task.id} checked={props.checked} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
