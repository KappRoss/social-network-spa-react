import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "63b50c95-b3b4-409e-8579-c797fdd256ce"
    },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    }
}
export const authAPI = {
    authMe(){
        return instance.get(`auth/me`)
    }
}
export const profileAPI = {
    setUser(userId){
        return instance.get(`profile/` + userId)
    }
}

