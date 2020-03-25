import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
  return (
      <div className = "app-wraper">
        <HeaderContainer />
        <Navbar />
        <div className = "app-wrapper-content">
          <Route path = "/Dialogs" render = {() => <DialogsContainer />} />
          <Route path = "/Profile/:userId?" render = {() => <ProfileContainer/>} />
          <Route path = "/News" render = {() => <News />} />
          <Route path = "/Music" render = {() => <Music />} />
          <Route path = "/Users" render = {() => <UsersContainer/>} />
        </div>    
      </div> 
  );
}

export default App;
