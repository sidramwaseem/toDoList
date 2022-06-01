import React from "react";
import "./All.css";
import Form from "../Form/Form.jsx";
// import Task from "../Task/Task.jsx";
// import {useParams} from 'react-router-dom';

function All() {
  return (
    <div className="All-container">
      <Form />
      <ul className="all_task-list">
          <li>
            <input type="checkbox" name="checkbox" id="1"/>
            <label htmlFor="1" >Go for Shopping</label>
          </li>
      </ul>
    </div>
  );
}

export default All;
