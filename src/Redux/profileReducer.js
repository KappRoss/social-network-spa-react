const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    postsData: [
        {id: 1, message: 'SomeTextsdgwergdsfg', likesCount: 12},
        {id: 2, message: 'SomeTextdfgsdfg', likesCount: 11},
        {id: 3, message: 'SomeTextdfgdsfgdfsgfdgfdg', likesCount: 1},
        {id: 4, message: 'SomeTextsdfgsdfsdfg', likesCount: 8},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    if( action.type === ADD_POST){
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        }
        return {
            ...state,
            postsData: [...state.postsData, newPost],
            newPostText: ''
        };
    } else if(action.type === UPDATE_NEW_POST_TEXT){
        return {
            ...state,
            newPostText: action.newText
        }
   }
    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => 
    ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer;