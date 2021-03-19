import { profileAPI } from '../api/api';

let ADD_POST = 'profile/ADD-POST';
let SET_PROFILE_PAGE = 'profile/SET_PROFILE_PAGE';
let SET_STATUS = 'profile/SET_STATUS';
let UPDATE_STATUS = 'profile/UPDATE_STATUS';
let DELETE_POST = 'profile/DELETE_POST';
let ADD_PHOTO = 'profile/ADD_PHOTO';

let initialState = {
        postData: [
                { id: 1, post: 'Это мой первый пост', like: 5 },
                { id: 2, post: 'Привет, как у вас дела?', like: 2 },
                { id: 3, post: 'Это мой первый проект на React', like: 10 },
        ],
        profile: null,
        status: '',
}

const profileReducer = (state = initialState, action) => {
        switch (action.type) {
                case ADD_POST:
                        return {
                                ...state,
                                postData: [...state.postData, { id: 5, post: action.newPostText, like: 25, }],
                        }
                case DELETE_POST: //!ДОБАВИТЬ КНОПКУ
                        return {
                                ...state,
                                postData: [...state.postData.filter(p => !p.action.id)]
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
                case ADD_PHOTO:
                        return {
                                ...state, 
                                profile: {...state.profile,photos: action.photos}
                        }
                default:
                        return state;
        }
}

//нужно подправить нейминг
//!ActionCreators
export let addPostAC = (newPostText) => { return { type: ADD_POST, newPostText } }
export let deletePostAC = (id) => { return { type: DELETE_POST, id } }
export let setProfilePage = (profile) => { return { type: SET_PROFILE_PAGE, profile } }
export let setUserStatus = (status) => { return { type: SET_STATUS, status } }
export let setPhoto = (photos) => { return { type: ADD_PHOTO, photos } }

//!ThunkCreator
export const setProfilePageTC = (userId) => async (dispatch) => {
        const data = await profileAPI.getProfile(userId)
        dispatch(setProfilePage(data));
}

export const getUserStatusTC = (userId) => async (dispatch) => {
        const data = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(data));
}

export const updateUserStatusTC = (status) => async (dispatch) => {
        const data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
                dispatch(setUserStatus(status));
        }
}

export const saveFotoTC = (photos) => async (dispatch) => {
        const data = await profileAPI.addPhoto(photos)
        if (data.resultCode === 0) {
                dispatch(setPhoto(data.data.photos));
        }
}

export default profileReducer;