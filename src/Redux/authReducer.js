import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false
}

let authReducer = (state = initialState, action) => {
    if(action.type === SET_USER_DATA){
        return{
            ...state,
            ...action.data,
            isAuth: true
        }
    }

    return state;
}

export const setAuthUserData = (id, email, login) => ({type:SET_USER_DATA, data: {id, email, login}})

export const authMe = () => {

    return(dispath) => {
        authAPI.authMe()
        .then(response => {
           if (response.data.resultCode === 0){
               let {id, email, login} = response.data.data
               dispath(setAuthUserData(id, email, login))
           }     
        })
    }

}

export default authReducer;