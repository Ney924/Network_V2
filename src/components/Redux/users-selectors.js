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

/* let mapStateToProps = (state) => {
        return {
                usersData: state.usersPage.usersData,
                pagesSize: state.usersPage.pagesSize,
                totalCount: state.usersPage.totalCount,
                currentPage: state.usersPage.currentPage,
                isFetching: state.usersPage.isFetching,
                followingInProgress: state.usersPage.followingInProgress,
        }
} */