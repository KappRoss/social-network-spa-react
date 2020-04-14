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

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))   
    }

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
        if(response.data.resultCode === 0){
            dispatch(setStatus(status))
        }        
}

export const getUsersProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.setUser(userId)
        dispatch(setUserProfile(response.data))
}

export default profileReducer;