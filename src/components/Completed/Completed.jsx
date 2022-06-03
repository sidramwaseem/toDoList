import React from "react";
import TaskList from "../TaskList/TaskList.jsx";

function Completed(props) {
  return (
    <div>
    {<TaskList task={props.task} deleteTask={props.deleteTask} />}
    </div>
  );
}
export default Completed;
