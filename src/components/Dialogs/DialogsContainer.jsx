import React from 'react';
import Dialogs from './Dialogs';
import {addMessageAtionCreator, onMessageChangeActionCreator} from "../Redux/dialogs-reducer";
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/AuthRedirect';

let mapStateToProps = (state) => {
        return {
                dialogsPage: state.dialogsPage,
                isAuth: state.auth.isAuth,
        }
}

let mapDispatchToProps = (dispatch) => {
        return {
                        addMessage: () => {
                        dispatch(addMessageAtionCreator())
                },
                updateNewMessageText: (text) => {
                        dispatch(onMessageChangeActionCreator(text))
                }
        }
}

let isAuthRedirectComponent = withAuthRedirect(Dialogs)

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(isAuthRedirectComponent)

export default DialogsContainer;







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
