import React from 'react';
import userPhoto from '../../assets/imges/userIcon.jpg';
import style from './Users.module.css';
import { NavLink } from 'react-router-dom';

    const User = ({ user , ...props}) => {
        return (
            <div className = {style.user}>          
                    <span>
                        <div>
                            <NavLink to = {'/profile/' + user.id}>
                                <img className={style.imgIcon} src = {user.photos.small != null ? user.photos.small : userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ?<button disabled = {props.followProgres.some(id => id === user.id)} onClick = { () => {
                                    props.unfollow(user.id)
                                }}>unfollow</button> 
                                :<button disabled = {props.followProgres.some(id => id === user.id)} onClick = { () => {
                                    props.follow(user.id)
                                }}>follow</button> } 
                        </div>
                    </span>
                    <div>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </div>
                    </div>
            </div>
        )
    }


export default User;