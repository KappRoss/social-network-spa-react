const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [ 
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Niko'}
    ],
    messagesData: [
        {id: 1, text: 'text messageSSSsssSSS'},
        {id: 2, text: 'text sexXx'}
    ]
}


const dialogsReducer = (state = initialState, action) => {
    if(action.type === SEND_MESSAGE){
        let body = action.newMessageBody;
        return({
            ...state,
            messagesData: [...state.messagesData, {id:6, text: body}]
        })
    }
    return state;
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;