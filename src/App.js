import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TextForms from "./components/TextForms";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // eslint-disable-next-line
  const [mode, setMode] = useState("light");

  //dark theme
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <Router>
      <Navbar title="TEXT-PLAYGROUND" mode={mode} toggleMode={toggleMode} />
      <div className="container mt-5">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForms
                heading="Enter the data in below box - Upper Case, Lower Case"
                mode={mode}
                toggleMode={toggleMode}
              ></TextForms>
            }
          ></Route>
        </Routes>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;
