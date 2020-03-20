import React from 'react';
import axios from 'axios';
import userPhoto from '../../assets/imges/userIcon.jpg';
import style from './Users.module.css';

const Users = (props) => {

    if(props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        });
    }

    return (
        <div>
        {
            props.users.map( u => <div key = {u.id}>
                <span>
                    <div>
                        <img className={style.imgIcon} src = {u.photos.small != null ? u.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {u.follow
                            ?<button onClick = { () => {props.unfollow(u.id)}}>unfollow</button> 
                            :<button onClick = { () => {props.follow(u.id)}}>follow</button> } 
                    </div>
                </span>
                <div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </div>
                </div>
            </div>)
        }
        </div>
    )
}

export default Users;