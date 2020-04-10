import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import { Route, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import {initializApp} from '../src/Redux/appReducer';
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';

class App extends React.Component {
  
  componentDidMount(){
    this.props.initializApp()
  }

  render(){
    if (!this.props.initialized){
      return <Preloader />
    } 
    return (
      <div className = "app-wraper">
        <HeaderContainer />
        <Navbar />
        <div className = "app-wrapper-content">
          <Route path = "/Dialogs" render = {() => <DialogsContainer />} />
          <Route path = "/Profile/:userId?" render = {() => <ProfileContainer />} />
          <Route path = "/News" render = {() => <News />} />
          <Route path = "/Music" render = {() => <Music />} />
          <Route path = "/Users" render = {() => <UsersContainer />} />
          <Route path = "/Login" render = {() => <Login />} />
        </div>    
      </div> 
    );
  }
  
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps,{initializApp})
)(App)

