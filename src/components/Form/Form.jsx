import React from 'react';
import "./Form.css";


function Form(props) {


  return (
    <div className="Form-container">
    <form className="Form-container_form" >
      <input type="text" placeholder="Enter a Task" name="task" onChange={props.handleChange}/>
      <button type="button">Add</button>
    </form>
  </div>
  )
}

export default Form
