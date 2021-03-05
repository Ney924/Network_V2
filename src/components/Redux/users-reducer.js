import {usersAPI} from '../api/api';

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

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
                                usersData: state.usersData.map(u=> {
                                        if (u.id === action.userId){
                                                return {...u, follow: true}; 
                                        }
                                        return u; 
                                }),
                        }  
                case UNFOLLOW: 
                        return {
                                ...state,
                                usersData: state.usersData.map(u=> {
                                        if (u.id === action.userId){
                                                return {...u, follow: false}; 
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
export const setCurrentPage = (currentPage) => { return { type: SET_CURRENT_PAGE, currentPage} }
export const setTotalCount = (totalCount) => { return { type: SET_TOTAL_COUNT, totalCount} }
export const setIsFetching = (isFetching) => { return { type: TOGGLE_IS_FETCHING, isFetching} }
export const toggleFollowingProgress = (isFetching, userId) => { return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} }

//!ThunkCreator
export const setUsersTC = (currentPage, pagesSize) => {
        return (dispatch) => {
                dispatch(setIsFetching(true)); 
                usersAPI.getUsersPage(currentPage, pagesSize).then(data => {
                        dispatch(setIsFetching(false));
                        dispatch(setUsers(data.items));
                        dispatch(setTotalCount(data.totalCount));
                });
        }
}
export const onPageChangedTC = (pageNumber, pagesSize) => {
        return (dispatch) => {
                dispatch(setCurrentPage(pageNumber));
                dispatch(setIsFetching(true));                   
                usersAPI.getUsersPage(pageNumber, pagesSize).then(data => {
                        dispatch(setIsFetching(false));
                        dispatch(setUsers(data.items));   
                });
        }
}
export const followTC = (id) => {
        return (dispatch) => {
                dispatch(toggleFollowingProgress(true, id))
                usersAPI.getUsersUnSubscribe(id)
                        .then(data => {
                        if (data.resultCode==0) {
                                dispatch(unFollow(id))
                        }
                        dispatch(toggleFollowingProgress(false, id))
                }); 
        }
}
export const unFollowTC = (id) => {
        return (dispatch) => {
                dispatch(toggleFollowingProgress(true, id))
                usersAPI.getUsersUnSubscribe(id)
                        .then(data => {
                        if (data.resultCode==0) {
                                dispatch(follow(id))
                        }
                        dispatch(toggleFollowingProgress(false, id))
                }); 
        }
}

export default usersReducer;