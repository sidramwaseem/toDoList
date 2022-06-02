import React from "react";
import "./All.css";
import Form from "../Form/Form.jsx";
import TaskList from "../TaskList/TaskList.jsx"

function All(props) {
  return (
    <div className="All-container">
      <Form task={props.task} addTask={props.addTask} addItem={props.addItem} />
      <TaskList task={props.task} handleCheck={props.handleCheck}
      isChecked={props.isChecked} checked={props.checked}/>
    </div>
  );
}
export default All;
