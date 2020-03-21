import React from 'react';
import axios from 'axios';
import userPhoto from '../../assets/imges/userIcon.jpg';
import style from './Users.module.css';

class Users extends React.Component {

    // constructor(props){
    //     super(props);
    // }

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsers / this.props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++ ){
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map( p => {
                        return <span className = {this.props.currentPage === p && style.selectPage}
                        onClick = {(event) => this.onPageChanged(p)}>{p}</span>
                    })}
                </div>
                {
                this.props.users.map( u => <div key = {u.id}>
                    <span>
                        <div>
                            <img className={style.imgIcon} src = {u.photos.small != null ? u.photos.small : userPhoto}/>
                        </div>
                        <div>
                            {u.follow
                                ?<button onClick = { () => {this.props.unfollow(u.id)}}>unfollow</button> 
                                :<button onClick = { () => {this.props.follow(u.id)}}>follow</button> } 
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
}

export default Users;