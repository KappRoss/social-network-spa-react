import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUsersProfile, getUserStatus, updateUserStatus} from '../../Redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount(){
        console.log('didMount');
        let userId = this.props.match.params.userId;
        
        if (!userId){
            userId =  this.props.authorizedUserId;
        }
        this.props.getUsersProfile(userId)

        this.props.getUserStatus(userId)
    }

    render(){
        console.log('render')
        return(
            <Profile 
                {...this.props} 
                profile = {this.props.profile} 
                status = {this.props.status}
                updateUserStatus = {this.props.updateUserStatus} 
            />
        )
    }

}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.authIcon.id
})


export default compose(
    connect(mapStateToProps, {getUsersProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);