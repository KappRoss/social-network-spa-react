import React from 'react';
import d from './DialogsItem.module.css';
import { NavLink } from 'react-router-dom';

// Links for dialogs
const DialogsItem = (props) => {
    return(
        <div className = {d.dialog}>
            <div className = {d.imgAva}>
                <img className = {d.avatar} src="https://99px.ru/sstorage/1/2020/02/image_12302200000423560081.gif" alt="avatar"/>
            </div>
            <div className = {d.link}>                     
                <NavLink to = {"/dialogs/" + props.id}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogsItem;