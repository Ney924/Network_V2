import {componentAPI} from '../api/api';

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
                                ...action.data,
                                isAuth: true,
                        }  
                default:
                        return state;
        }
}

//!ActionCreators
export let setAuthUserData = (userId, email, login,) => {return {type: SET_USER_DATA,data: {userId,email,login,}}}

//!ThunkCreator
export let setAuthUserDataTC = () => {
        return (dispatch) => {       
                componentAPI.getAuthMe().then(data => {
                        if (data.resultCode === 0) {
                                let {id, email, login} = data.data;
                                dispatch(setAuthUserData(id, email, login));
                        }
                });
        }
}


export default authReducer;

