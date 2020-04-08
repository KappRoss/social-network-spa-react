import React from 'react';
import ds from './Dialogs.module.css';
import Messages from './Messages/Messages';
import DialogsItem from './DialogsItem/DialogsItem';
import {Field, reduxForm} from 'redux-form';

const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogsElement = state.dialogsData.map(d => <DialogsItem name = {d.name} key = {d.id} id = {d.id}/>)
    let messagesElement = state.messagesData.map(m => <Messages dialog = {m.text} key = {m.id} id = {m.id}/>)

    let onSendMessageClick = (value) => {
        props.sendMessage(value.newMessageBody);
    }
    
    return(
        <div className = {ds.dialogS}>
            <div className = {ds.dialogsItems}>
                {dialogsElement}
            </div>
            <div className = {ds.messages}>
                <div>{messagesElement}</div>
                <AddMessageFormRedux onSubmit = {onSendMessageClick}/>
            </div>
            
        </div>
    )
}

const AddMessageForm = (props) => {
    return(
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field component = "textarea" name = "newMessageBody" placeholder = "enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'message'})(AddMessageForm)
export default Dialogs;