import React, { useState } from 'react';
import style from './Users.module.css';

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++ ){
        pages.push(i)
        }
    
    let portionSize = 10;
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortion = (portionNumber - 1) * portionSize + 1;
    let rightPortion = (portionNumber * portionSize);
        
    return (
        <div className = {style.pagination}>
            {portionNumber > 1 &&
            <botton onClick = {() => setPortionNumber(portionNumber - 1) }>PREV</botton>
            }
            {pages
            .filter(p => p >= leftPortion &&  p <= rightPortion)
            .map( p => {
                return <span className = {props.currentPage === p && style.selectPage}
                onClick = {() => {props.onPageChanged(p)}}>{p}</span>
            })}
            {
            portionCount > portionNumber &&
            <botton onClick = {() => setPortionNumber(portionNumber + 1)}>NEXT</botton>
            }
        </div>
    )
}


export default Paginator;