const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [ 
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Niko'}
    ],
    messagesData: [
        {id: 1, text: 'text messageSSSsssSSS'},
        {id: 2, text: 'text sexXx'}
    ],
    newMessageBody: ''
}


const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        //messagesData: [...state.messagesData]                 
    };
    if(action.type === UPDATE_NEW_MESSAGE_BODY){
        stateCopy.newMessageBody = action.body;

    }else if(action.type === SEND_MESSAGE){
        let body = {
            id: 6,
            text: state.newMessageBody
        } 
        stateCopy.messagesData.push(body);
        stateCopy.newMessageBody = '';
    }
    return stateCopy;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => 
        ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;