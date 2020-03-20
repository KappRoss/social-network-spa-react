import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return{
        messagesPage: state.messagesPage
    }
}

let mapDispathToProps = (dispatch) => {
    return{
        updateNewMessageBody: (body) => dispatch(updateNewMessageBodyCreator(body)),
        sendMessage: () => dispatch(sendMessageCreator())
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(Dialogs)

export default DialogsContainer;