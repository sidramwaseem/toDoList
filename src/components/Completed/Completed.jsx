import React from "react";
import TaskList from "../TaskList/TaskList.jsx";

function Completed(props) {
  return (
    <div>
      {props.check && (
        <TaskList
          task={props.task}
          deleteTask={props.deleteTask}
        />
      )}
    </div>
  );
}
export default Completed;
