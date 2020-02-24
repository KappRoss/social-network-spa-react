import React from 'react';
import ds from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

// Links for dialogs
const DialogsItem = (props) => {
    return(
        <div className = {ds.dialog}>
                    <NavLink to = {"/dialogs/" + props.id}>{props.name}</NavLink>
                </div>
    )
}

export default DialogsItem;