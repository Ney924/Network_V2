import {rerenderEntireTree} from "./../../render";

let state ={
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
}

export let addPost = () => {
        let newPost = {
                id: 5,
                post: state.profilePage.newPostText ,
                like: 0,
        } 
        state.profilePage.postData.push(newPost);
        state.profilePage.newPostText='';
        
        rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
         state.profilePage.newPostText = newText;
        rerenderEntireTree(state);
}

export let addMessage = () => {
        let newMessage = {
                id: 5,
                message: state.dialogsPage.newMessageText,
        } 
        state.dialogsPage.messagesData.push(newMessage);
        state.dialogsPage.messagesData ='';
        
        rerenderEntireTree(state);
}

export let updateNewMessageText = (newTextMessage) => {
        state.dialogsPage.newMessageText = newTextMessage;
       rerenderEntireTree(state);
}


export default state; 