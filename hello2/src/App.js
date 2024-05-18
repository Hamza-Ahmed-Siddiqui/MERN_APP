import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import UseStatee from "./components/UseStatee";
import UseStatee2 from "./components/UseStatee2";
import TextForm2 from "./components/TextForm2";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>

    
      {/* <TextForm2 /> */}
      {/* <Test /> */}

      {/* <UseStatee2 /> */}
      {/* <UseStatee /> */}
   

      <div className="container">
      {/* <Router>
    <Navbar
        title="propsFirst"
        mode={mode}
        toggleMode={toggleMode}
        services="Services"
        about="About US"
        contact="Contact  US"
      />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        
        <Route path="/">
        <TextForm heading="Enter the text to analyze" mode={mode} />

        </Route>
      </Switch>
      </Router> */}
    <Router>
      <div className="app-container">
        <Navbar />
        <Switch>
          <Route path="/about" />
        </Switch>
        
      </div>
    </Router>


      </div>

      {/* <Alert alert  = "This is alert"/> */}

      {/* <About /> */}
    </>
  );
}

export default App;
