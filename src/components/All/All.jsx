import React from "react";
import "./All.css";
import Form from "../Form/Form.jsx";
// import {useParams} from 'react-router-dom';

function All(props) {
  return (
    <div className="All-container">
      <Form />
      <ul className="all_task-list">
        <li>
          <input type="checkbox" id="task1" onChange={props.handleChange}/>
          <label for="task1">{props.task}</label>
        </li>
      </ul>
    </div>
  );
}

export default All;
