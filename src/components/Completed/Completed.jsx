import React from 'react';
import TaskList from "../TaskList/TaskList.jsx"


function Completed(props) {
  

  return (
    <div>
    { <TaskList task={props.task} handleCheck={props.handleCheck}
    isChecked={props.isChecked} checked={props.checked}/>}
    </div>
  )
}
export default Completed
