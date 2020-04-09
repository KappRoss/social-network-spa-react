import { authAPI } from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

let authReducer = (state = initialState, action) => {
    if(action.type === SET_USER_DATA){
        return{
            ...state,
            ...action.payload
        }
    }
    return state;
}

export const setAuthUserData = (id, email, login, isAuth) => ({type:SET_USER_DATA, payload: {id, email, login, isAuth}})

export const authMe = () => (dispath) => {
    authAPI.authMe()
    .then(response => {
        if (response.data.resultCode === 0){
            let {id, email, login} = response.data.data
            dispath(setAuthUserData(id, email, login, true))
        }     
    })
}

export const login = (email, password, rememberMe) => (dispath) => {
    authAPI.login(email, password, rememberMe)
    .then(response => {
        if (response.data.resultCode === 0){
            dispath(authMe())
        } else{
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"; 
            dispath(stopSubmit("login", {_error: message}))
        }    
    })
}

export const logout = () => (dispath) => {
    authAPI.logout()
    .then(response => {
        if (response.data.resultCode === 0){
            dispath(setAuthUserData(null, null, null, false))
        }     
    })
}

export default authReducer;