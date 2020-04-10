export const getUsersState = (state) => {
    return state.usersPage.users
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsers = (state) => {
    return state.usersPage.totalUsers
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowProgres = (state) => {
    return state.usersPage.followProgres
}
