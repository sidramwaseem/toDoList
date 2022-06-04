import React from "react";
import TaskList from "../TaskList/TaskList.jsx";

function Completed(props) {

  return (
    <div>
      {props.checkClass && (
        <TaskList
          isDone={props.isDone}
          task={props.task}
          deleteTask={props.deleteTask}
          checkClass={props.checkClass}
        />
      )}
    </div>
  );
}
export default Completed;
