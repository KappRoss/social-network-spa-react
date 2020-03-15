import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
      <div className = "app-wraper">
        <Header />
        <Navbar />
        <div className = "app-wrapper-content">
          <Route path = "/Dialogs" 
                render = {() => <DialogsContainer store = {props.store}/>} />
          <Route path = "/Profile" 
                render = {() => <Profile store = {props.store}/>} />
          <Route path = "/News" render = {() => <News />} />
          <Route path = "/Music" render = {() => <Music />} />
        </div>    
      </div> 
  );
}

export default App;
