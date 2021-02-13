import {rerenderEntireTree} from "./../../render";

let state ={
        profilePage:{
                postData: [
                        {id:1, post:'Это мой первый пост', like: 5},
                        {id:2, post:'Привет, как дела?', like: 2},
                        {id:3, post:'Хуёво, денег нет', like: 10},
                      ],
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
                        {id: 4, message: 'да, пердак то горит'}
                ],
        }
}

export let addPost = (postMessage) => {
        let newPost = {
                id: 5,
                post: postMessage,
                like: 0,
        } 
        state.profilePage.postData.push(newPost);
        
        rerenderEntireTree(state);
}

export default state; 