let SEND_MESSAGE = 'dialogs/SEND-MESSAGE';
let ACTIV_DIALOG = 'dialogs/ACTIV_DIALOG';

let initialState = {
        dialogsData: [
                { id: 1, name: 'Илья' },
                { id: 2, name: 'Анна' },
                { id: 3, name: 'Алексей' },
                { id: 4, name: 'Егор' },
                { id: 5, name: 'Константин' },
                { id: 5, name: 'Павел' }
        ],
        messagesData: [
                { id: 1, message: 'Привет' },
                { id: 2, message: 'Как дела' },
                { id: 3, message: 'Учу реакт' },
        ],
        activeDialog: '',

};

const dialogsReducer = (state = initialState, action) => {
        switch (action.type) {
                case SEND_MESSAGE:
                        return {
                                ...state,
                                messagesData: [...state.messagesData, { id: 5, message: action.messagesData }],
                        }
                case ACTIV_DIALOG:
                        const interlocutor = state.dialogsData.find(item => item.id == action.id)
                        console.log({interlocutor});
                        return {
                                ...state,
                                activeDialog: interlocutor.name
                        } 
                default:
                        return state;
        }
}

export let addMessageAC = (newMessageBody) => { return { type: SEND_MESSAGE, messagesData: newMessageBody } }
export let activDialogAC = (id) => { return { type: ACTIV_DIALOG, id } }

export default dialogsReducer;

