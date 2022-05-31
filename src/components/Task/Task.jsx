import React from "react";

function Task(props) {
  return (
    <ul className="all_task-list">
      {props.task?.length > 0 ? (
        props.task.map((task, index) => (
          <li>
            <input type="checkbox" id={index} />
            <label htmlFor={index}>{task}</label>
          </li>
        ))
      ) : (
        <h2>You have no tasks!</h2>
      )}
    </ul>
  );
}

export default Task;
