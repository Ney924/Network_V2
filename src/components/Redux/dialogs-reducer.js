let SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

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
};
const dialogsReducer = (state = initialState, action) => {
        switch (action.type) {
                case SEND_MESSAGE:
                        return {
                                ...state,
                                messagesData: [...state.messagesData, {id: 5, message: action.messagesData}],  //добавляем новое сообщение
                        }  
                default:
                        return state;
        }
}

export let addMessageAC = (newMessageBody) => { return {type: SEND_MESSAGE, messagesData: newMessageBody} }

export default dialogsReducer;


/* const dialogsReducer = (state = initialState, action) => {
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
} */

