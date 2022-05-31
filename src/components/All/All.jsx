import React from "react";
import "./All.css";
import Form from "../Form/Form.jsx";
import Task from "../Task/Task.jsx"
// import {useParams} from 'react-router-dom';

function All(props) {
  return (
    <div className="All-container">
      <Form handleChange={props.handleChange} handleClick={props.handleClick} />
      <Task />
    </div>
  );
}

export default All;
