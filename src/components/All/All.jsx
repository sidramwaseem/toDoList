import React from "react";
import "./All.css";
import Form from "../Form/Form.jsx";
// import {useParams} from 'react-router-dom';

function All() {
  return (
    <div className="All-container">
      <Form />
      <ul className="all_task-list">
        <li>
          <input type="checkbox" id="task1" />
          <label for="task1">Do Coding challneges</label>
        </li>
      </ul>
    </div>
  );
}

export default All;
