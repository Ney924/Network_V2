import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from './auth-reducer';
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer';


let redusers = combineReducers (
        {
                profilePage: profileReducer,
                dialogsPage: dialogsReducer,
                usersPage: usersReducer,
                auth: authReducer,
                form: formReducer,
                app: appReducer,
        }
);

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store; 