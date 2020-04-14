import React from 'react';
import style from './Users.module.css';

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++ ){
        pages.push(i)
        }

    return (
        <div>
            {pages.map( p => {
                return <span className = {props.currentPage === p && style.selectPage}
                onClick = {() => {props.onPageChanged(p)}}>{p}</span>
            })}
        </div>
    )
}


export default Paginator;
    ;