import React from "react";
import Task from "../Task/Task.jsx";
import "./TaskList.css";

function TaskList(props) {

  const [checked, setChecked] = React.useState([]);

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    
  };

  var isChecked = (item) =>
  checked.includes(item) ? "checked-item" : "not-checked-item";
 

  return (
    <div className="tasklist-container">
      <div className="tasklist-conatiner_tasklist">
        {props.task.map((task) => (
          <Task
          task={props.task}
            key={task.key}
            text={task.text}
            id={task.id}
            handleCheck={handleCheck}
            isChecked={isChecked}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
