import React, { useState, useEffect } from "react";
import {Route,Routes} from "react-router-dom"
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Login from "./Components/Login/Login";
import FirstPg from "./Components/Firstpg";
import About from "./Components/aboutpage/about";

function App() {
  const [isLoggedin, setisLoggedin] = useState(false);
  useEffect(() => {
    const storageinfo = localStorage.getItem("Loggedin");
    if (storageinfo === '1') {
      setisLoggedin(true);
    }
  }, []);
  const logInHandeler = (email, password) => {
    // we take email and password for further linking with backend and verification though they are not in use currently
    setisLoggedin(true);
    localStorage.setItem("Loggedin", "1");
  };
  const logoutHandeler= ()=>{
    setisLoggedin(false);
    localStorage.removeItem("Loggedin", "1")
  }

  return (
    <>
      <Nav onlogout={logoutHandeler}></Nav>
      {!isLoggedin && <Login checkVal={logInHandeler} />}
      <div className="App">
        {isLoggedin && 
        <Routes>
        <Route path="/Firstpg" element={<FirstPg/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
        }
        
      </div>
    </>
  );
}

export default App;
