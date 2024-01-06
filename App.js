import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textforms from './Components/Textforms';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

// import React, { UseState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = ' #181212';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Navbar aboutText="About TEXTIFILES" />  */}
      {/* <Router> */}
        <Navbar title="TEXTIFILES" aboutText="About TEXTIFILES" mode={mode} toggleMode={toggleMode} />
        <Alert Alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Textforms showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>  */}
           <Textforms showAlert={showAlert} heading="TRY TEXTIFILES - Word counter | Character counter" mode={mode} /> 
        </div>
      {/* </Router> */}
    </>
  );
}
export default App;
