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
        if( action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}

export default store;           