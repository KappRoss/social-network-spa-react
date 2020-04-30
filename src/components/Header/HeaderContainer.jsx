import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../Redux/authReducer';
import {getUsersProfile} from '../../Redux/profileReducer';

class HeaderContainer extends React.Component {
    
    // componentDidMount(){
    //     let userId = true;
        
    //     if (!userId){
    //         userId =  this.props.authorizedUserId;
    //     }
    //     this.props.getUsersProfile(userId)
    // }

    render(){
        return <Header {...this.props} />
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.authIcon.isAuth,
    login: state.authIcon.login,
    profile: state.profilePage.profile
});
export default connect(mapStateToProps,{logout, getUsersProfile})(HeaderContainer);