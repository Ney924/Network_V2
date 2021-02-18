import React from 'react';
import Dialogs from './Dialogs';
import {addMessageAtionCreator, onMessageChangeActionCreator} from "../Redux/dialogs-reducer";


const DialogsContainer = (props) => {
        let state = props.store.getState().dialogsPage;
        
        let addMessage = () => {
                props.store.dispatch(addMessageAtionCreator());
        }
        
        let onMessageChange = (text) => {
                props.store.dispatch(onMessageChangeActionCreator(text));
        }

        return <Dialogs 
                addMessage={addMessage}
                updateNewMessageText={onMessageChange}
                messagesData={state.messagesData}
                newMessageText={state.newMessageText}
                dialogsData={state.dialogsData}
        />
}

export default DialogsContainer;