let SEND_MESSAGE = 'SEND-MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
                dialogsData: [
                        {id: 1, name: 'Ilya'},
                        {id: 2, name: 'Anna'},
                        {id: 3, name: 'Aleksey'},
                        {id: 4, name: 'Egor'},
                        {id: 5, name: 'Konstantin'},
                ],
                      
                messagesData: [
                        {id: 1, message: 'Привет'},
                        {id: 2, message: 'Как дела'},
                        {id: 3, message: 'Учу реакт'},
                        {id: 4, message: 'горит славно'},
                ],
                newMessageText: '',
};


const dialogsReducer = (state = initialState, action) => {
        switch (action.type) {
                case SEND_MESSAGE:
                        return {
                                ...state,
                                messagesData: [...state.messagesData, {id: 5, message: state.newMessageText,}],
                                newTextMessage: '',
                        }  
                case UPDATE_NEW_MESSAGE_TEXT: 
                        return {
                                ...state,
                                newMessageText: action.newTextMessage,
                        };
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

