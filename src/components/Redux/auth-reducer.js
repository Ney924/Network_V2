import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form'

let SET_USER_DATA = 'auth/SEND-MESSAGE';

let initialState = {
        userId: null,
        email: null,
        login: null,
        isAuth: false,
};

const authReducer = (state = initialState, action) => {
        switch (action.type) {
                case SET_USER_DATA:
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

//!ThunkCreator
export let setAuthUserDataTC = () => async (dispatch) => {
        const data = await authAPI.getAuthMe()
                if (data.resultCode === 0) {
                        let { id, email, login } = data.data;
                        dispatch(setAuthUserData(id, email, login, true));
                }
}

export let loginTC = (email, password, rememberMe) => async (dispatch) => {
        const data = await authAPI.login(email, password, rememberMe)
                if (data.resultCode === 0) {
                        dispatch(setAuthUserDataTC())
                }
                else {
                        let messageError = data.messages.length > 0 ? data.messages[0]: 'Ошибка'
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

export default authReducer;

