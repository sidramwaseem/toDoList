import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import All from "./components/All/All.jsx";
import Active from "./components/Active/Active.jsx";
import Completed from "./components/Completed/Completed";
import "./App.css";

function App() {
  const [task, setTask] = React.useState([
    {
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "Go for Shopping",
      key: Date.now() + "" + Math.floor(Math.random() * 78),
      isDone: false,
      index: 1,
    },
    {
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "Do Assignment",
      key: Date.now() + "" + Math.floor(Math.random() * 78),
      isDone: false,
      index: 2,
    },
  ]);

  function addTask(item) {
    const tempTask = [...task];
    tempTask.push({
      id: item.id,
      text: item.text,
      key: item.key,
      isDone: item.isDone,
    });
    setTask(tempTask);
  }

  const [checked, setChecked] = React.useState();

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  function deleteTask(id) {
    const tempTask = [...task];
    const index = tempTask.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempTask.splice(index, 1);
    setTask(tempTask);
  }

  const [checkClass, setCheckClass] = React.useState(false);

  function toggleClass() {
    setCheckClass((prevClass) => !prevClass);
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
                isDone={task.isDone}
                task={task}
                addTask={addTask}
                handleCheck={handleCheck}
                deleteTask={deleteTask}
                checkClass={checkClass}
                toggleClass={toggleClass}
              />
            }
          ></Route>
          <Route
            path="/active"
            element={
              <Active
                isDone={task.isDone}
                task={task}
                addTask={addTask}
                handleCheck={handleCheck}
                deleteTask={deleteTask}
                checkClass={checkClass}
                toggleClass={toggleClass}
              />
            }
          ></Route>
          <Route
            path="/completed"
            element={
              <Completed
                isDone={task.isDone}
                task={task}
                handleCheck={handleCheck}
                deleteTask={deleteTask}
                checkClass={checkClass}
                toggleClass={toggleClass}
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
