import {createStore, combineReducers} from 'redux';
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";



let redusers = combineReducers (
        {
                profilePage: profileReducer,
                dialogsPage: dialogsReducer,
        }
);

let store = createStore(redusers);

export default store; 