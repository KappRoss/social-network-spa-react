import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowFetching, getUsers } from '../../Redux/usersReducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';

class UsersContainer extends React.Component {

    // constructor(props){
    //     super(props);
    // }

    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null }
                <Users totalUsers = {this.props.totalUsers}
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followProgres: state.usersPage.followProgres
    }
}
/*let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}
*/

export default connect(mapStateToProps, {follow, unfollow,
                                        setCurrentPage,
                                        toggleFollowFetching, getUsers})(UsersContainer);
