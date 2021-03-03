import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from './auth-reducer';
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk';


let redusers = combineReducers (
        {
                profilePage: profileReducer,
                dialogsPage: dialogsReducer,
                usersPage: usersReducer,
                auth: authReducer,
        }
);

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store; 