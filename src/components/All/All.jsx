import React from "react";
import "./All.css";
import Form from "../Form/Form.jsx";
import TaskList from "../TaskList/TaskList.jsx";

function All(props) {
  console.log("YYYYYYYYYYYYYYYYY", props);
  return (
    <div className="All-container">
      <Form task={props.task} addTask={props.addTask} addItem={props.addItem} />
      <TaskList
        task={props.task}
        handleCheck={props.handleCheck}
        deleteTask={props.deleteTask}
      />
    </div>
  );
}
export default All;
