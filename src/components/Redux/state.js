let store = {
        _state: {
                profilePage:{
                        postData: [
                                {id:1, post:'Это мой первый пост', like: 5},
                                {id:2, post:'Привет, как дела?', like: 2},
                                {id:3, post:'Хуёво, денег нет', like: 10},
                              ],
                        newPostText: '',
                },
                dialogsPage:{
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
                                {id: 3, message: 'Учу ссучий реакт'},
                                {id: 4, message: 'да, пердак то горит'},
                        ],
                        newMessageText: '',
                }
        },
        getState() {
                return this._state
        },
        _callSudscriber() {
                console.log('state bla bla')
        },
        subscribe(observer) {
                this._callSudscriber = observer;
        },
        dispatch(action) {
                if (action.type === 'ADD-POST') {
                        let newPost = {
                                id: 5,
                                post: this._state.profilePage.newPostText ,
                                like: 0,
                        } 
                        this._state.profilePage.postData.push(newPost);
                        this._state.profilePage.newPostText='';
                        
                        this._callSudscriber(this._state); 
                }
                else if (action.type === 'UPDATE-NEW-POST-TEXT') {
                        this._state.profilePage.newPostText = action.newText;
                        this._callSudscriber(this._state);
                }
                else if (action.type === 'ADD-MESSAGE'){
                        let newMessage = {
                                id: 5,
                                message: this._state.dialogsPage.newMessageText,
                        } 
                        this._state.dialogsPage.messagesData.push(newMessage);
                        this._state.dialogsPage.messagesData ='';
                        
                        this._callSudscriber(this._state);
                }
                else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
                        this._state.dialogsPage.newMessageText = action.newTextMessage;
                        this._callSudscriber(this._state);
                }
        },
}

export default store; 



/* addPost() {
                let newPost = {
                        id: 5,
                        post: this._state.profilePage.newPostText ,
                        like: 0,
                } 
                this._state.profilePage.postData.push(newPost);
                this._state.profilePage.newPostText='';
                
                this._callSudscriber(this._state);
        },
        updateNewPostText(newText){
                this._state.profilePage.newPostText = newText;
                this._callSudscriber(this._state);
        },
        addMessage() {
                let newMessage = {
                        id: 5,
                        message: this._state.dialogsPage.newMessageText,
                } 
                this._state.dialogsPage.messagesData.push(newMessage);
                this._state.dialogsPage.messagesData ='';
                
                this._callSudscriber(this._state);
        },
        updateNewMessageText(newTextMessage) {
                this._state.dialogsPage.newMessageText = newTextMessage;
                this._callSudscriber(this._state);
        }, */