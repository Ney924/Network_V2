import { authAPI } from '../api/api';
import { setAuthUserDataTC } from './auth-reducer'

let SET_INITIALAZE = 'SET_INITIALAZE';

let initialState = {
        initialazed: false,
};

const appReducer = (state = initialState, action) => {
        switch (action.type) {
                case SET_INITIALAZE:
                        return {
                                ...state,
                                initialazed: true,
                        }
                default:
                        return state;
        }
}

//!ActionCreators
export let setInizialaze = () => { return { type: SET_INITIALAZE } }

//!ThunkCreator
export let initialazeAppTC = () => (dispatch) => {
        let promise = dispatch(setAuthUserDataTC())
        Promise.all([promise])
                .then(() => {
                        dispatch(setInizialaze())
                })
}

export default appReducer;



/* export let loginTC = (email, password, rememberMe) => {
        return (dispatch) => {
                authAPI.login(email, password, rememberMe).then(data => {
                        if (data.resultCode === 0) {
                                dispatch(setAuthUserDataTC())
                        }
                        else {
                                let messageError = data.messages.length > 0 ? data.messages[0]: 'Ошибка'
                                let action = stopSubmit('login', { _error: messageError });
                                dispatch(action)
                        }
                });
        }
}
export let logoutTC = () => {
        return (dispatch) => {
                authAPI.logout().then(data => {
                        if (data.resultCode === 0) {
                                dispatch(setAuthUserData(null, null, null, false))
                        }
                });
        }
} */