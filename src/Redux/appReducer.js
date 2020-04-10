import { authAPI } from "../api/api";
import {stopSubmit} from "redux-form";
import { authMe } from "./authReducer";

const INITIALIZED_SUCCESS = 'SET_INITIALIZED';

let initialState = {
    initialized: false
}

let appReducer = (state = initialState, action) => {
    if(action.type === INITIALIZED_SUCCESS){
        return{
            ...state,
            initialized: true
        }
    }
    return state;
}

const initializedSuccess = () => ({type:INITIALIZED_SUCCESS})

export const initializApp = () => (dispath) => {
    let promise = dispath(authMe())
    Promise.all([promise]).then(() => dispath(initializedSuccess()))
}

export default appReducer;