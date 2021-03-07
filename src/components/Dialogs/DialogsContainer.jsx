import React from 'react';
import Dialogs from './Dialogs';
import {addMessageAC, } from "../Redux/dialogs-reducer";
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/AuthRedirect';
//import { compose } from 'redux';

let mapStateToProps = (state) => {
        return {
                dialogsPage: state.dialogsPage,
                isAuth: state.auth.isAuth,
        }
}

let mapDispatchToProps = (dispatch) => {
        return {
                addMessage: (newMessageBody) => {dispatch(addMessageAC(newMessageBody))},
        }
}

//export default compose()()

let isAuthRedirectComponent = withAuthRedirect(Dialogs)

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(isAuthRedirectComponent)

export default DialogsContainer;






//!Всякое стаарое
/* const DialogsContainer = (props) => {
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
} */
 /* updateNewMessageText: (text) => {dispatch(onMessageChangeActionCreator(text))} */