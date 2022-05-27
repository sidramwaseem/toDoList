import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import All from "./components/All.jsx";
import Active from "./components/Active.jsx";
import Completed from "./components/Completed.jsx";

function App() {
  return (
    <div>
      <Router>

      <Link to="/" >All</Link>
      <Link to="/active">Active</Link>
      <Link to="/completed" >Completed</Link>

        <Routes>
          <Route path="/:usernames" element={ <All/> } ></Route>
          <Route path="/active" element={ <Active/> } ></Route>
          <Route path="/completed" element={ <Completed/> } ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
