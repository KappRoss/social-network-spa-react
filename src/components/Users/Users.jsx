import React from 'react';
import userPhoto from '../../assets/imges/userIcon.jpg';
import style from './Users.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

    const Users = (props) => {

        let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++ ){
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map( p => {
                        return <span className = {props.currentPage === p && style.selectPage}
                        onClick = {() => {props.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                {
                props.users.map( u => <div key = {u.id}>
                    <span>
                        <div>
                            <NavLink to = {'/profile/' + u.id}>
                                <img className={style.imgIcon} src = {u.photos.small != null ? u.photos.small : userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.follow
                                ?<button onClick = { () => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, 
                                        {withCredentials: true, 
                                        headers: {
                                            "API-KEY": "63b50c95-b3b4-409e-8579-c797fdd256ce"
                                        }
                                    }).then(response => {
                                        if(response.data.resultCode == 0){
                                            props.unfollow(u.id)
                                    }
                                    });

                                
                                }}>unfollow</button>
                                
                            
                                :<button onClick = { () => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, 
                                        {withCredentials: true, 
                                        headers: {
                                            "API-KEY": "63b50c95-b3b4-409e-8579-c797fdd256ce"
                                        }
                                    }).then(response => {
                                        if(response.data.resultCode == 0){
                                            props.follow(u.id)
                                    }
                                    });
                                }}>follow</button> } 
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