import React from "react";
import "./All.css";
import Form from "../Form/Form.jsx";
// import Task from "../Task/Task.jsx";
// import {useParams} from 'react-router-dom';

function All(props) {
  return (
    <div className="All-container">
      <Form handleChange={props.handleChange} />
      <ul className="all_task-list">
        {props.task.map((task, index) => (
          <li key={index}>
            <input type="checkbox" name="checkbox" id={task.id} />
            <label>{task.text}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default All;
