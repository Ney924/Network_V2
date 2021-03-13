import React from 'react';
import profileReducer, { addPostAC } from "./profile-reducer";


//!  1. Готовим исходные данные для теста: action и state в данном случае
let action = addPostAC('testOne');
        let state = {
                postData: [
                        { id: 1, post: 'Это мой первый пост', like: 5 },
                        { id: 2, post: 'Привет, как дела?', like: 2 },
                        { id: 3, post: 'Хуёво, денег нет', like: 10 },
                ],
        }

test('новый пост должен быть добавлен', () => {       
        let testProfileReducer = profileReducer(state, action)  
        expect (testProfileReducer.postData.length).toBe(4); //! Наши ожидания. Если пост добавился - длинна массива увеличится
});

test('Те ли данные пришли в посте', () => {
        let testProfileReducer = profileReducer(state, action)
        expect (testProfileReducer.postData[3].post).toBe('testOne');
});

test('После удаления поста длина массива уменьшится', () => {
        let testProfileReducer = profileReducer(state, action)
        expect (testProfileReducer.postData.length).toBe(2);
});





