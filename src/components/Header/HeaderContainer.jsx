import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../Redux/authReducer';

class HeaderContainer extends React.Component {
    
    render(){
        return <Header {...this.props} />
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.authIcon.isAuth,
    login: state.authIcon.login
});
export default connect(mapStateToProps,{logout})(HeaderContainer);