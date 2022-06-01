import React from "react";
import "./Form.css";

function Form(props) {


  return (
    <div className="Form-container">
      <form className="Form-container_form" onSubmit={props.addItem} >
        <input
          type="text"
          placeholder="Enter a Task"
          name="task"
          id="isDone"
          checked={props.isDone}
        />
        <button type="button">
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
