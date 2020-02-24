import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className = "app-wraper">
        <Header />
        <Navbar />
        <div className = "app-wrapper-content">
          <Route path = "/Dialogs" render = {() => <Dialogs state = {props.state.messagesPage}/>} />
          <Route path = "/Profile" render = {() => <Profile state = {props.state.profilePage}/>} />
          <Route path = "/News" render = {() => <News />} />
          <Route path = "/Music" render = {() => <Music />} />
        </div>    
      </div>
    </BrowserRouter> 
  );
}

export default App;
