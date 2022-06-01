import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="Form-container">
      <form className="Form-container_form">
        <input
          type="text"
          placeholder="Enter a Task"
          name="task"
        />
        <button type="button">
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
