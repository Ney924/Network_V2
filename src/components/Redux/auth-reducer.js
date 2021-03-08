import {authAPI} from '../api/api';

let SET_USER_DATA = 'SEND-MESSAGE';


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
export let setAuthUserData = (userId, email, login, isAuth) => {return {type: SET_USER_DATA,payload: {userId, email, login, isAuth}}}

//!ThunkCreator
export let setAuthUserDataTC = () => {
        return (dispatch) => {       
                authAPI.getAuthMe().then(data => {
                        if (data.resultCode === 0) {
                                let {id, email, login} = data.data;
                                dispatch(setAuthUserData(id, email, login, true));
                        }
                });
        }
}
export let loginTC = (email, password, rememberMe) => {
        return (dispatch) => {       
                authAPI.login(email, password, rememberMe).then(data => {
                        if (data.resultCode === 0) {
                                dispatch(setAuthUserDataTC())
                        }
                });
        }
}
export let logoutTC = () => {
        return (dispatch) => {       
                authAPI.logout().then(data => {
                        if (data.resultCode === 0) {
                                dispatch(setAuthUserDataTC(null, null, null, false))
                        }
                });
        }
}


export default authReducer;

