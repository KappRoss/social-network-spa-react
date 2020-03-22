import React from 'react';
import userPhoto from '../../assets/imges/userIcon.jpg';
import style from './Users.module.css';

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