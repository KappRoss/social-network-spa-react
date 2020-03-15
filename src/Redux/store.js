import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'SomeTextsdgwergdsfg', likesCount: 12},
                {id: 2, message: 'SomeTextdfgsdfg', likesCount: 11},
                {id: 3, message: 'SomeTextdfgdsfgdfsgfdgfdg', likesCount: 1},
                {id: 4, message: 'SomeTextsdfgsdfsdfg', likesCount: 8},
            ],
            newPostText: ''
        },
    
        messagesPage: {
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
    },
    _callSubscriber(){},
    ////////////////////////////////////////////////////////////////////
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer ;
    },
    ////////////////////////////////////////////////////////////////////
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);
    }

}

export default store;           