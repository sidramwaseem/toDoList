import React from "react";
import Form from "../Form/Form.jsx";

function Active(props) {
  return (
    <div className="Active-container">
      <Form handleChange={props.handleChange}/>
    </div>
  );
}

export default Active;
