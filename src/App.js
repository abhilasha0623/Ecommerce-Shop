import React from "react";
import {Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/checkout" element ={<Checkout />}/>
          <Route path="/" element ={<Home/>}/>
      </Routes>
    </div>
    // <div className="App">
    //   <Header/>
    //   <Home/>
    // </div>
  );
}

export default App;
