import React from "react";

import './App.css';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profle";
import Dialog from "./components/Dialogs/Diaolog";
import {Route, BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='content'>
          <Route path='/messages' component={Dialog}/>
          <Route path='/profile' component={Profile}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
