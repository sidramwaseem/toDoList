import React from "react";
import Task from "../Task/Task.jsx";
import "./TaskList.css";

function TaskList(props) {
 
 
 
 
  return (
    <div className="tasklist-container">
      <div className="tasklist-conatiner_tasklist">
        {props.task.map((task, index) => (
          <Task
            task={props.task}
            key={index}
            text={task.text}
            id={task.id}
            handleCheck={props.handleCheck}
            deleteTask={props.deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
