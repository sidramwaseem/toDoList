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
      key: Date.now(),
      isDone: true,
    },
    {
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "Do Assignment",
      key: Date.now(),
      isDone: true,
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

  // function addItem(event) {
    // if (this._inputElement !== "") {
      // var newItem = {
        // text: this._inputElement.value,
        // id: Date.now() + "" + Math.floor(Math.random() * 78),
        // key: Date.now(),
        // isDone: false,
      // };
      // addTask(newItem);
      // this._inputElement = "";
    // }
    // event.preventDefault();
  // }

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
            element={<All task={task} addTask={addTask}  />}
          ></Route>
          <Route
            path="/active"
            element={<Active task={task} addTask={addTask}   />}
          ></Route>
          <Route path="/completed" element={<Completed task={task} />}></Route>
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
