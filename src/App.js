import React from "react";

import './App.css';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profle";
import Dialog from "./components/Dialogs/Diaolog";

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      {/*<Profile/>*/}
      <Dialog/>
    </div>
  );
}

export default App;
