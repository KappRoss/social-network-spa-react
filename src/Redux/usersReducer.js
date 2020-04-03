import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FATCHING = 'TOGGLE_IS_FATCHING';
const TOGGLE_FOLLOW_PROGRES = 'TOGGLE_FOLLOW_PROGRES';

let initialState = {
    users: [
    //    {id: 1, photoUrl: 'https://cs16planet.ru/steam-avatars/images/avatar1833.jpg' ,
    //        follow: false, fullName: 'Rostik', status: 'im a Boss', location: {country: 'Ukrain', city: 'Kiev'}}
    ],
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1,
    isFetching: false,
    followProgres: [],
}

const usersReducer = (state = initialState, action) => {
    if (action.type === FOLLOW){
        return {
            ...state,
            users: state.users.map(item => {
                if(item.id === action.userId){
                    return {...item, follow: true}
                }
                return item;
            })
        }
    }
    else if (action.type ===  UNFOLLOW){
        return {
            ...state,
            users: state.users.map(item => {
                if(item.id === action.userId){
                    return {...item, follow: false}
                }
                return item;
            })
        }
    }
    else if(action.type === SET_USERS){
        return {
            ...state,
            users: action.users
        }
    }
    else if(action.type === SET_CURRENT_PAGE){
        return {
            ...state,
            currentPage: action.currentPage
        }
    }
    else if(action.type === SET_USERS_TOTAL_COUNT){
        return{
            ...state,
            totalUsers: action.totalCount
        }
    }
    else if(action.type === TOGGLE_IS_FATCHING){
        return {
            ...state,
            isFetching: action.isFetching
        }
    }
    else if(action.type === TOGGLE_FOLLOW_PROGRES){
        return {
            ...state,
            followProgres: action.isFetching 
            ? [...state.followProgres, action.userId]
            : state.followProgres.filter(id => id != action.userId)
        }
    }
    return state;
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FATCHING, isFetching});
export const toggleFollowFetching = (isFetching, userId) => ({type: TOGGLE_FOLLOW_PROGRES, isFetching, userId});

// THUNK below
export const getUsers = (currentPage, pageSize) => {

    return(dispatch) =>  {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setUsersTotalCount(data.totalCount))
        });
    }
}
export const follow = (userId) => {

    return(dispatch) =>  {
        dispatch(toggleFollowFetching(true, userId))
        usersAPI.follow(userId)
        .then(response => {
            if(response.data.resultCode == 0){
                dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowFetching(false, userId))
        });
    }
}
export const unfollow = (userId) => {

    return(dispatch) =>  {
        dispatch(toggleFollowFetching(true, userId))
        usersAPI.unfollow(userId)
        .then(response => {
            if(response.data.resultCode == 0){
                dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowFetching(false, userId))
        });
    }
}

export default usersReducer;

