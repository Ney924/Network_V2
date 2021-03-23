import { stopSubmit } from 'redux-form';
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
	photoData: [
		{ id: 1, photo: 'https://99px.ru/sstorage/53/2018/11/mid_241496_764968.jpg' },
		{ id: 2, photo: 'https://cs5.pikabu.ru/post_img/big/2015/12/06/11/1449430982115592321.jpg' },
		{ id: 3, photo: 'https://zooblog.ru/wp-content/uploads/2017/03/1421246515_34-1.jpg' },
		{ id: 4, photo: 'https://www.meme-arsenal.com/memes/3b7265bfc0e362ddeebbf529262c01e8.jpg' },
		{ id: 5, photo: 'https://cs5.pikabu.ru/post_img/big/2015/11/17/8/1447765801_80236817.jpg' },
		{ id: 5, photo: 'https://i.pinimg.com/originals/f4/a4/3e/f4a43e9aa6b67992731f9c554714a78d.jpg' },
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
				profile: { ...state.profile, photos: action.photos }
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

export const saveProfileDataTC = (profile) => async (dispatch, getState) => {
	const userId = getState().auth.userId;
	const data = await profileAPI.saveProfileData(profile)
	if (data.resultCode === 0) {
		dispatch(setProfilePageTC(userId));
	}
	else {
		let messageError = data.messages.length > 0 ? data.messages[0] : 'Ошибка'
		dispatch(stopSubmit('edit-profile', { _error: messageError }))
		return Promise.reject(data.messages[0])
	}
}

export default profileReducer;