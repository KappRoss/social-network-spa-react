import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        {id: 1, message: 'SomeTextsdgwergdsfg', likesCount: 12},
        {id: 2, message: 'SomeTextdfgsdfg', likesCount: 11},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    if( action.type === ADD_POST){
        let newPost = {
            id: 5,
            message: action.newPostText,
            likesCount: 0
        }
        return {
            ...state,
            postsData: [...state.postsData, newPost],
            newPostText: ''
        };
    } 
    else if (action.type === SET_USER_PROFILE){
        return {
            ...state,
            profile: action.profile
        }
    }
    else if (action.type === SET_STATUS){
        return{
            ...state,
            status: action.status
        }
    }
    return state;
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserStatus = (userId) => {
    return(dispatch) => {
        profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateUserStatus = (status) => {
    return(dispatch) => {
        profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
    }
}

export const getUsersProfile = (userId) => {
    return(dispatch) => {
        profileAPI.setUser(userId)
        .then(response => {
                dispatch(setUserProfile(response.data))
        });
    }
}

export default profileReducer;