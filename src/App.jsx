import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import All from "./components/All/All.jsx";
import Active from "./components/Active/Active.jsx";
import Completed from "./components/Completed/Completed";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router className="App_Router">
        <h1 className="App_Title">#justDo-It</h1>
        <nav className="App_Nav">
          <Link to="/all" className="App_Nav_Link">All</Link>
          <Link to="/active" className="App_Nav_Link">Active</Link>
          <Link to="/completed" className="App_Nav_Link">Completed</Link>
        </nav>
        <Routes>
          <Route path="/:usernames" element={<All />}></Route>
          <Route path="/active" element={<Active />}></Route>
          <Route path="/completed" element={<Completed />}></Route>
        </Routes>
        <footer className="footer" >
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
