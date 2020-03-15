import React from 'react';
import ds from './Dialogs.module.css';
import Messages from './Messages/Messages';
import DialogsItem from './DialogsItem/DialogsItem';

const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogsElement = state.dialogsData.map(d => <DialogsItem name = {d.name} id = {d.id}/>)
    let messagesElement = state.messagesData.map(m => <Messages dialog = {m.text} id = {m.id}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

    return(
        <div className = {ds.dialogS}>
            <div className = {ds.dialogsItems}>
                {dialogsElement}
            </div>
            <div className = {ds.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea value = {newMessageBody}
                                  onChange = {onNewMessageChange}
                                  placeholder = "Enter yor massage"></textarea>
                    </div>
                    <div>
                        <button onClick = {onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;