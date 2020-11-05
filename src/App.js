import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profle";
import Dialog from "./components/Dialogs/Dialog";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='content'>
          {/*<Route path={'/messages'} component={Dialog}/>*/}
          <Route path={'/messages'} render={() => <Dialog UserDialogsAndMessages={props.dates}/>}/>

          <Route path={'/profile'}
                 render={() => <Profile PostCommentsAndLikesToProfileDates={props.dates}/>}/>
          <Route path={'/news'} render={() => <News/>}/>
          <Route path={'/music'} render={() => <Music/>}/>
          <Route path={'/settings'} render={() => <Settings/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
