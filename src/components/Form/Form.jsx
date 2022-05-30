import React from 'react';
import "./Form.css";


function Form() {
  const [task, setTask] = React.useState("");

  function addTask(event){
    setTask(event.target.value)
  }




  return (
    <div className="Form-container">
    <form className="Form-container_form" >
      <input type="text" placeholder="Enter a Task" name="task" onChange={addTask}/>
      <button type="button">Add</button>
    </form>
  </div>
  )
}

export default Form
