import { usersAPI } from '../api/api';

let FOLLOW = 'users/FOLLOW';
let UNFOLLOW = 'users/UNFOLLOW';
let SET_USERS = 'users/SET_USERS';
let SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
let SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT';
let TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
let TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
        usersData: [],
        pagesSize: 50,
        totalCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
        switch (action.type) {
                case FOLLOW:
                        return {
                                ...state,
                                usersData: state.usersData.map(u => {
                                        if (u.id === action.userId) {
                                                return { ...u, follow: true };
                                        }
                                        return u;
                                }),
                        }
                case UNFOLLOW:
                        return {
                                ...state,
                                usersData: state.usersData.map(u => {
                                        if (u.id === action.userId) {
                                                return { ...u, follow: false };
                                        }
                                        return u;
                                }),
                        }
                case SET_USERS:
                        return {
                                ...state, usersData: [...action.users]
                        }
                case SET_CURRENT_PAGE:
                        return {
                                ...state, currentPage: action.currentPage
                        }
                case SET_TOTAL_COUNT:
                        return {
                                ...state, totalCount: action.totalCount
                        }
                case TOGGLE_IS_FETCHING:
                        return {
                                ...state, isFetching: action.isFetching
                        }
                case TOGGLE_IS_FOLLOWING_PROGRESS:
                        return {
                                ...state, followingInProgress: action.isFetching
                                        ? [...state.followingInProgress, action.userId]
                                        : state.followingInProgress.filter(id => id != action.userId)
                        }
                default:
                        return state;
        }
}

//!ActionCreators
export const follow = (userId) => { return { type: FOLLOW, userId } }
export const unFollow = (userId) => { return { type: UNFOLLOW, userId } }
export const setUsers = (users) => { return { type: SET_USERS, users } }
export const setCurrentPage = (currentPage) => { return { type: SET_CURRENT_PAGE, currentPage } }
export const setTotalCount = (totalCount) => { return { type: SET_TOTAL_COUNT, totalCount } }
export const setIsFetching = (isFetching) => { return { type: TOGGLE_IS_FETCHING, isFetching } }
export const toggleFollowingProgress = (isFetching, userId) => { return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId } }

//!ThunkCreator
export const setUsersTC = (currentPage, pagesSize) => async (dispatch) => {
        dispatch(setIsFetching(true));
        const data = await usersAPI.getUsersPage(currentPage, pagesSize)
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
}
export const onPageChangedTC = (pageNumber, pagesSize) => async (dispatch) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(setIsFetching(true));
        const data = await usersAPI.getUsersPage(pageNumber, pagesSize)
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
}


const followUnfollowFlow = async (dispatch, userId, metodApi, actionCreator) => {
        dispatch(toggleFollowingProgress(true, userId))
        const data = await metodApi(userId)
        if (data.resultCode == 0) {
                dispatch(actionCreator(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))

}
export const followTC = (id) => async (dispatch) => {
        followUnfollowFlow(dispatch, id, usersAPI.getUsersUnSubscribe.bind(usersAPI), unFollow);
}
export const unFollowTC = (id) => async (dispatch) => {
        followUnfollowFlow(dispatch, id, usersAPI.getUsersSubscribe.bind(usersAPI), follow);
}

export default usersReducer;





//! ДО РЕФАКТОРИНГА!
/*export const followTC = (id) => async (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        const data = await usersAPI.getUsersUnSubscribe(id)
        if (data.resultCode == 0) {
                dispatch(unFollow(id))
        }
        dispatch(toggleFollowingProgress(false, id))
}

export const unFollowTC = (id) => async (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        const data = await usersAPI.getUsersSubscribe(id)
        if (data.resultCode == 0) {
                dispatch(follow(id))
        }
        dispatch(toggleFollowingProgress(false, id))
} */