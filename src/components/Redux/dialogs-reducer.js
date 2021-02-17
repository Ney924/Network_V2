let SEND_MESSAGE = 'SEND-MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
        switch (action.type) {
                case SEND_MESSAGE:
                        let newMessage = {
                                id: 5,
                                message: state.newMessageText,
                        } 
                        state.messagesData.push(newMessage);
                        return state;
                case UPDATE_NEW_MESSAGE_TEXT:
                        state.newMessageText = action.newTextMessage;
                        return state;
                default:
                        return state;
        }
}

export let addMessageAtionCreator = () => {
        return {
                type: SEND_MESSAGE,
        }
}
export let onMessageChangeActionCreator = (text) => {
        return {
                type: UPDATE_NEW_MESSAGE_TEXT, 
                newTextMessage: text,
        }
}

export default dialogsReducer;

