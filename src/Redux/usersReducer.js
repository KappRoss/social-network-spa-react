const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
    //    {id: 1, photoUrl: 'https://cs16planet.ru/steam-avatars/images/avatar1833.jpg' ,
    //        follow: false, fullName: 'Rostik', status: 'im a Boss', location: {country: 'Ukrain', city: 'Kiev'}},
    //    {id: 2, photoUrl: 'https://cs16planet.ru/steam-avatars/images/avatar3315.jpg' ,
    //        follow: true, fullName: 'Wowa', status: 'im a Boss', location: {country: 'Ukrain', city: 'Petrivske'}},
    ]
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
            users: [...state.users, ...action.users]
        }
    }
    return state;
}
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;

