import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import Governance from "./component/pages/Governance";
import Transaction from "./component/pages/Transaction";
import About from "./component/pages/About";
import Profile from "./component/pages/Profile";
import Navbar from "./component/Navbar";
import Main from "./component/Main";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar></Navbar>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/governance" element={<Governance />}></Route>
          <Route exact path="/transaction" element={<Transaction />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
