import React from 'react';
import ds from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    return(
        <div className = {ds.dialog}>
                    <NavLink to = {"/dialogs/" + props.id}>{props.name}</NavLink>
                </div>
    )
}

const Messages = (props) => {
    return(
        <div className = {ds.dialog}>{props.dialog}</div>
    )
}

let dialogsData = [{id: 1, name: 'Dima'}]

let messagesData = [{id: 1, text: 'text messageSSSsssSSS'}]

const Dialogs = (props) => {
    return(
        <div className = {ds.dialogS}>
            <div className = {ds.dialogsItems}>
                <DialogsItem name = {dialogsData[0].name} id = {dialogsData[0].id}/>
                <DialogsItem name = "Petro" id = "2"/>
                <DialogsItem name = "Zina" id = "3"/>
                <DialogsItem name = "Wowa" id = "4"/>
            </div>
            <div className = {ds.messages}>
                <Messages dialog = {messagesData[0].text} />
            </div>
        </div>
    )
}

export default Dialogs;