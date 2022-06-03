import React from "react";
import TaskList from "../TaskList/TaskList.jsx";

function Completed(props) {
  


  return (
    <div>{props.checkClass && <TaskList task={props.task} deleteTask={props.deleteTask} checkClass={props.checkClass}
    toggleClass={props.toggleClass} />}</div>
  );
}
export default Completed;
