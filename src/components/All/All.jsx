import React from "react";
import "./All.css";
import Form from "../Form/Form.jsx";
import TaskList from "../TaskList/TaskList.jsx"

function All(props) {
  return (
    <div className="All-container">
      <Form task={props.task} addTask={props.addTask}/>
      <TaskList task={props.task} />
    </div>
  );
}

export default All;
