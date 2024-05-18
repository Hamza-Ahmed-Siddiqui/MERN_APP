import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import ReactDom from 'react-dom';
// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

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
      <Navbar
        title="propsFirst"
        mode={mode}
        toggleMode={toggleMode}
        services="Services"
        about="About US"
        contact="Contact  US"
      />

      <Alert alert="This is alert" />

      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>

            <Route path="/">
      <TextForm heading="Enter the text to analyze" mode={mode} />

            </Route>
          </Switch>
        </Router>

      </div>



      {/* <About /> */}
    </>
  );
}

export default App;
