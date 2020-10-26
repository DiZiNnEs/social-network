import React from "react";

import './App.css';

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profle from "./components/Profle";

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <Profle/>
    </div>
  );
}

export default App;
