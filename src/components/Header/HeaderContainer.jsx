import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Axios from 'axios';
import {authMe} from '../../Redux/authReducer';

class HeaderContainer extends React.Component {

    componentDidMount(){

        this.props.authMe()
        // Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // }).then(response => {
        //    if (response.data.resultCode === 0){
        //        let {id, email, login} = response.data.data
        //        this.props.setAuthUserData(id, email, login)
        //    }     
        // });
    }
    
    render(){
        return <Header {...this.props} />
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.authIcon.isAuth,
    login: state.authIcon.login
});
export default connect(mapStateToProps,{authMe})(HeaderContainer);