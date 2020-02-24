import React from 'react';
import ds from './Dialogs.module.css';
import Messages from './Messages/Messages';
import DialogsItem from './DialogsItem/DialogsItem';

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogsData.map(d => <DialogsItem name = {d.name} id = {d.id}/>)

    let messagesElement = props.state.messagesData.map(m => <Messages dialog = {m.text} id = {m.id}/>)

    return(
        <div className = {ds.dialogS}>
            <div className = {ds.dialogsItems}>
                {dialogsElement}
            </div>
            <div className = {ds.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;