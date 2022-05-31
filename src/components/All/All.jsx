import React from "react";
import "./All.css";
import Form from "../Form/Form.jsx";
// import {useParams} from 'react-router-dom';

function All(props) {
  console.log(props.task)
  return (
    <div className="All-container">
      <Form handleChange={props.handleChange} />
      <ul className="all_task-list">
        <li>
          <input type="checkbox" id="task1"/>
          <label htmlFor="task1">{props.task}</label>
        </li>
      </ul>
    </div>
  );
}

export default All;
