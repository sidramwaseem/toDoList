import React from "react";

function Task(props) {
  const {task} = props;
  // const taskItem = 
  return (
    <ul className="all_task-list">
      {task?.length > 0 ? (
        task.map((task) => (
          <li key={task.id}>
            <input type="checkbox" id={task.id} />
            <label htmlFor={task.id}>{task.text}</label>
          </li>
        ))
      ) : (
        <h2>You have no tasks!</h2>
      )}
    </ul>
  );
}

export default Task;
