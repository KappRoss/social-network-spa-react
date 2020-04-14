import React from 'react';
import Paginator from './paginator';
import User from './User';

const Users = (props) => {
    return (
        <div>
            <Paginator 
                currentPage = {props.currentPage}
                onPageChanged = {props.onPageChanged}
                totalUsers = {props.totalUsers}
                pageSize = {props.pageSize}
            />
            {
                props.users.map( u => <User 
                                        user = {u}
                                        followProgres = {props.followProgres}
                                        unfollow = {props.unfollow}
                                        follow = {props.follow}
                                        key = {u.id}
                                    />                         
            )}
        </div>
    )
}


export default Users;