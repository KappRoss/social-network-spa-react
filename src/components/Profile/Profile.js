import React from 'react';
import p from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return(
        <div>
            <ProfileInfo />
            <MyPosts posts = {props.state.postsData}/>
        </div>
    )
}

export default Profile;