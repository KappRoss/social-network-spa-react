import React from 'react';
import ds from './../Dialogs.module.css';

//component for  display DialogsItem`s messages
const Messages = (props) => {
    return(
        <div className = {ds.dialog}>{props.dialog}</div>
    )
}

export default Messages;