import React from "react";
import Form from "../Form/Form.jsx";
// import Task from "../Task/Task.jsx";

function Active(props) {
  return (
    <div className="Active-container">
      <Form handleChange={props.handleChange} />
      
    </div>
  );
}

export default Active;
