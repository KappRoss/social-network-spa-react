import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
      <div className = "app-wraper">
        <Header />
        <Navbar />
        <div className = "app-wrapper-content">
          <Route path = "/Dialogs" render = {() => <DialogsContainer />} />
          <Route path = "/Profile" render = {() => <Profile/>} />
          <Route path = "/News" render = {() => <News />} />
          <Route path = "/Music" render = {() => <Music />} />
          <Route path = "/Users" render = {() => <UsersContainer/>} />
          
        </div>    
      </div> 
  );
}

export default App;
