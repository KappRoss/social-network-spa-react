const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FATCHING = 'TOGGLE_IS_FATCHING';

let initialState = {
    users: [
    //    {id: 1, photoUrl: 'https://cs16planet.ru/steam-avatars/images/avatar1833.jpg' ,
    //        follow: false, fullName: 'Rostik', status: 'im a Boss', location: {country: 'Ukrain', city: 'Kiev'}},
    //    {id: 2, photoUrl: 'https://cs16planet.ru/steam-avatars/images/avatar3315.jpg' ,
    //        follow: true, fullName: 'Wowa', status: 'im a Boss', location: {country: 'Ukrain', city: 'Petrivske'}},
    ],
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1,
    isFetching: false,
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
    return state;
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCountAC = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FATCHING, isFetching});



export default usersReducer;

