import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowFetching, getUsers } from '../../Redux/usersReducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import {getUsersState, getPageSize, getTotalUsers, getCurrentPage, getIsFetching, getFollowProgres} from '../../Redux/userSelectors';

class UsersContainer extends React.Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps !== this.props || nextState !== this.state
    }

    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null }
                <Users 
                    totalUsers = {this.props.totalUsers}
                    pageSize = {this.props.pageSize}
                    currentPage = {this.props.currentPage}
                    onPageChanged = {this.onPageChanged}
                    users = {this.props.users}
                    unfollow = {this.props.unfollow}
                    follow = {this.props.follow} 
                    followProgres = {this.props.followProgres}
                    />
                </>
    }
    
}

let mapStateToProps = (state) => {
    return {
        users: getUsersState(state),
        pageSize: getPageSize(state),
        totalUsers: getTotalUsers(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followProgres: getFollowProgres(state)
    }
}

export default connect(mapStateToProps, {follow, unfollow,
                                        setCurrentPage,
                                        toggleFollowFetching, getUsers})(UsersContainer);
