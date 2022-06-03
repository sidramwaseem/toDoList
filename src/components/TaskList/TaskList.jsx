import React from "react";
import Task from "../Task/Task.jsx";
import "./TaskList.css";

function TaskList(props) {
  return (
    <div className="tasklist-container">
      <div className="tasklist-conatiner_tasklist">
        {props.task.map((task, index) => (
          <Task
          index={index}
            task={props.task}
            key={task.key}
            text={task.text}
            id={task.id}
            isDone={props.isDone}
            handleCheck={props.handleCheck}
            deleteTask={props.deleteTask}
            checkClass={props.checkClass}
            toggleClass={props.toggleClass}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
