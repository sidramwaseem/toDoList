import React from "react";
import Form from "../Form/Form.jsx";
import TaskList from "../TaskList/TaskList.jsx"

function Active(props) {
  return (
    <div className="Active-container">
      <Form task={props.task} addTask={props.addTask} addItem={props.addItem} />
      <TaskList task={props.task}  />
    </div>
  );
}

export default Active;
