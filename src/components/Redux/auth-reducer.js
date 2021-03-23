import { authAPI, securityAPI } from '../api/api';
import { stopSubmit } from 'redux-form'

let SET_USER_DATA = 'auth/SEND-MESSAGE';
let GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	captchaURL: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
		case GET_CAPTCHA_URL:
			return {
				...state,
				...action.payload,
			}
		default:
			return state;
	}
}

//!ActionCreators
export let setAuthUserData = (userId, email, login, isAuth) => { return { type: SET_USER_DATA, payload: { userId, email, login, isAuth } } }
export let getCaptchaUrlSucsess = (captchaURL) => { return { type: GET_CAPTCHA_URL, payload: {captchaURL} } }

//!ThunkCreator
export let setAuthUserDataTC = () => async (dispatch) => {
	const data = await authAPI.getAuthMe()
	if (data.resultCode === 0) {
		let { id, email, login,} = data.data;
		dispatch(setAuthUserData(id, email, login, true,));
	}
}

export let loginTC = (email, password, rememberMe, captcha) => async (dispatch) => {
	const data = await authAPI.login(email, password, rememberMe, captcha)
	if (data.resultCode === 0) {
		dispatch(setAuthUserDataTC())
	}
	else {
		if (data.resultCode === 10) {
			dispatch(captchaTC())
		}
		let messageError = data.messages.length > 0 ? data.messages[0] : 'Ошибка'
		let action = stopSubmit('login', { _error: messageError });
		dispatch(action)
	}
}

export let logoutTC = () => async (dispatch) => {
	const data = await authAPI.logout()
	if (data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false))
	}
}

export let captchaTC = () => async (dispatch) => {
	const data = await securityAPI.getCaptcha()
	const captchaURL = data.url;	
	dispatch(getCaptchaUrlSucsess(captchaURL))
}

export default authReducer;

