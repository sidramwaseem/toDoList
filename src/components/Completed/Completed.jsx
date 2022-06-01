import React from 'react';
import TaskList from "../TaskList/TaskList.jsx"

function Completed(props) {
  return (
    <div>
    {props.isDone && <TaskList task={props.task} />}
    </div>
  )
}

export default Completed
