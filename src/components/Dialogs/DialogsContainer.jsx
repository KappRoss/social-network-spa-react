import React from 'react';
import { sendMessageCreator} from '../../Redux/dialogsReducer';
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
        sendMessage: (newMessageBody) => dispatch(sendMessageCreator(newMessageBody))
    }
}

export default compose(
    connect(mapStateToProps, mapDispathToProps),
    //withAuthRedirect
)(Dialogs);