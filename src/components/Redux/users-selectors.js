export const getUsers = (state) => {
        return state.usersPage.usersData;
}
export const getPagesSize = (state) => {
        return state.usersPage.pagesSize;
}
export const getTotalCount = (state) => {
        return state.usersPage.totalCount;
}
export const getCurrentPage = (state) => {
        return state.usersPage.currentPage;
}
export const getIsFetching = (state) => {
        return state.usersPage.isFetching;
}
export const getFollowingInProgress = (state) => {
        return state.usersPage.followingInProgress;
}
export const getPortionSize = (state) => {
        return state.usersPage.portionSize;
}