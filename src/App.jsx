import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import All from "./components/All/All.jsx";
import Active from "./components/Active/Active.jsx";
import Completed from "./components/Completed/Completed";
import "./App.css";

function App() {
  /* Setting up state for the tasks */

  const [task, setTask] = React.useState([
    {
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "Go for Shopping",
      isCheck: false,
    },
    {
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "Do Assignment",
      isCheck: false,
    },
  ]);

  /*Function to add a new Task in the list */

  function addTask(item) {
    const tempTask = [...task];
    tempTask.push({
      id: item.id,
      text: item.text,
      key: item.key,
      isCheck: item.isCheck,
    });
    checkClass.push(item.isCheck)
    setTask(tempTask);
  }

  /* State to handle the task being written in the Input of the Form */

  const [checked, setChecked] = React.useState([]);

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  /* Function to delete the task from the TaskList */

  function deleteTask(id) {
    const tempTask = [...task];
    const index = tempTask.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempTask.splice(index, 1);
    setTask(tempTask);
  }

  /* State to toggle between the classes when the task is checked*/

  // const [checkClass, setCheckClass] = React.useState([]);

  // function toggleClass(index) {
  // for (let i = 0; i < task.length; i++) {
  // if (task[i].index === index) {
  // checkClass.push(task.isDone);
  // setCheckClass((prevClass) => !prevClass);
  // }
  // }
  // }

  const [checkClass, setCheckClass] = React.useState([false,false]);

  console.log(checkClass)

  function reverseClass(id) {
  }

  return (
    <div className="App">
      <Router className="App_Router">
        <h1 className="App_Title">#justDo-It</h1>
        <nav className="App_Nav">
          <Link to="/all" className="App_Nav_Link">
            All
          </Link>
          <Link to="/active" className="App_Nav_Link">
            Active
          </Link>
          <Link to="/completed" className="App_Nav_Link">
            Completed
          </Link>
        </nav>
        <Routes>
          <Route
            path="/all"
            element={
              <All
                task={task}
                addTask={addTask}
                handleCheck={handleCheck}
                deleteTask={deleteTask}
              />
            }
          ></Route>
          <Route
            path="/active"
            element={
              <Active
                task={task}
                addTask={addTask}
                handleCheck={handleCheck}
                deleteTask={deleteTask}
              />
            }
          ></Route>
          <Route
            path="/completed"
            element={
              <Completed
                task={task}
                handleCheck={handleCheck}
                deleteTask={deleteTask}
              />
            }
          ></Route>
        </Routes>
        <footer className="footer">
          <p>
            Crated by{" "}
            <a
              href="https://github.com/sidramwaseem"
              target="_blank"
              rel="noreferrer"
            >
              Sidra
            </a>{" "}
            - devChallenges.io{" "}
          </p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
