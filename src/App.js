import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';

const App = () => {
  return (
    <BrowserRouter>
      <div className = "app-wraper">
        <Header />
        <Navbar />
        <div className = "app-wrapper-content">
          <Route path = "/Dialogs" component = {Dialogs} />
          <Route path = "/Profile" component = {Profile} />
          <Route path = "/News" component = {News} />
          <Route path = "/Music" component = {Music} />
        </div>
          
      </div>
    </BrowserRouter>
    
  );
}

export default App;
