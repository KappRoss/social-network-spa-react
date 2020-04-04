import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

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

export default compose(
    connect(mapStateToProps, mapDispathToProps),
    withAuthRedirect
)(Dialogs);