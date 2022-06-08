import React from "react";
import Form from "../Form/Form.jsx";
import TaskList from "../TaskList/TaskList.jsx";

function Active(props) {
  return (
    <div className="Active-container">
      <Form task={props.task} addTask={props.addTask} addItem={props.addItem} />
      {!props.check && (
        <TaskList
          task={props.task}
          handleCheck={props.handleCheck}
          deleteTask={props.deleteTask}
        />
      )}
    </div>
  );
}

export default Active;
