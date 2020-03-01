import React from 'react';
import m from './Messages.module.css';
import SendPlace from './SendElement/sendPlace';

//component for  display DialogsItem`s messages
const Messages = (props) => {
    return(
        <div>  
            <div className = {m.dialog}>{props.dialog}</div>
            <SendPlace />
        </div> 
          
    )
}

export default Messages;