import {profileAPI} from '../api/api';

let ADD_POST = 'ADD-POST';
let SET_PROFILE_PAGE = 'SET_PROFILE_PAGE';
let SET_STATUS = 'SET_STATUS';
let UPDATE_STATUS = 'UPDATE_STATUS';
let DELETE_POST = 'DELETE_POST';

let initialState = {
                postData: [
                        {id:1, post:'Это мой первый пост', like: 5},
                        {id:2, post:'Привет, как дела?', like: 2},
                        {id:3, post:'Хуёво, денег нет', like: 10},
                      ],
                profile: null,
                status:'',
}

const profileReducer = (state = initialState, action) => {
        switch (action.type) {
                case ADD_POST: 
                        return {
                                ...state,
                                postData: [ ...state.postData, {id: 5, post: action.newPostText, like: 25,}],
                        }
                case DELETE_POST: //!ДОБАВИТЬ КНОПКУ
                        return {
                                ...state,
                                postData: [ ...state.postData.filter(p => !p.action.id)]
                        }
                case SET_PROFILE_PAGE:
                        return {
                                ...state,
                                profile: action.profile,
                        }
                case SET_STATUS:
                        return {
                                ...state,
                                status: action.status,
                        }
                case UPDATE_STATUS:
                        return {
                                ...state,
                                status: action.status,
                        }
                default:
                        return state;   
        }
}


//нужно подправить нейминг
//!ActionCreators
export let addPostAC = (newPostText) => { return {type: ADD_POST, newPostText} }
export let deletePostAC = (id) => { return {type: DELETE_POST, id} }
export let setProfilePage = (profile) => {return {type: SET_PROFILE_PAGE, profile,}}
export let setUserStatus = (status) => {return {type: SET_STATUS, status,}}

//!ThunkCreator
export const setProfilePageTC = (userId) => {
        return (dispatch) => {       
                profileAPI.getProfile(userId).then(data => {
                        dispatch(setProfilePage(data));
                }); 
        }
}
export const getUserStatusTC = (userId) => {
        return (dispatch) => {       
                profileAPI.getStatus(userId).then(data => {
                        dispatch(setUserStatus(data));
                }); 
        }
}
export const updateUserStatusTC = (status) => {
        return (dispatch) => {      
                profileAPI.updateStatus(status).then(data => {
                        if (data.resultCode===0) {
                                dispatch(setUserStatus(status));
                        }
                        
                }); 
        }
}


export default profileReducer; 