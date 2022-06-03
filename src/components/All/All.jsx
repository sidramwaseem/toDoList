import React from "react";
import "./All.css";
import Form from "../Form/Form.jsx";
import TaskList from "../TaskList/TaskList.jsx";

function All(props) {
  
  
  
  

  return (
    <div className="All-container">
      <Form task={props.task} addTask={props.addTask} addItem={props.addItem} />
      <TaskList
      isDone={props.isDone}
        task={props.task}
        handleCheck={props.handleCheck}
        deleteTask={props.deleteTask}
        checkClass={props.checkClass}
        toggleClass={props.toggleClass}
      />
    </div>
  );
}
export default All;
