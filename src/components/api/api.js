import React from 'react';
import * as axios from 'axios';

const instance = axios.create({
            baseURL: 'https://social-network.samuraijs.com/api/1.0/' , 
            withCredentials: true,
            headers: {"API-KEY" : "785eab70-df14-4fb5-9f9e-100f69f4a368"},
})


export const usersAPI = {
        getUsersPage (currentPage, pagesSize) {                                   //Вывод юзеров, постранично                        
                return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
        .       then(response => {return response.data}) 
        },
        getUsersUnSubscribe (id) {                                              //Отписаться от юзера
                return instance.delete(`follow/${id}`)
                .then(response => {return response.data})                                                          
        },
        getUsersSubscribe (id) {                                                //Подписаться  на юзера
                return instance.post(`follow/${id}`)
                .then(response => {return response.data})                                                          
        }
}

export const profileAPI = {
        getProfile (userId) {                                                   //Показать профиль выбранного пользователя
                return instance.get(`profile/` + userId)
                .then(response => {return response.data})
        },
        getStatus (userId) {                                                   //Показать профиль выбранного пользователя
                return instance.get(`profile/status/` + userId)
                .then(response => {return response.data})
        },
        updateStatus (status) {                                                   //Показать профиль выбранного пользователя
                return instance.put(`profile/status`, {status: status})
                .then(response => {return response.data})
        },
}

export const authAPI = {
        getAuthMe() {                                                             //Войти в соц сеть под своим именем
                return instance.get(`auth/me`)
                .then(response => {return response.data})  //!ПРОМИС .then ПРОЧИТАТЬ КАК ЭТЬО РАБОТАЕТ
        },
        login(email, password, rememberMe = false) {                               //логинимся в свой профиль                         
                return instance.post(`auth/login`, {email, password, rememberMe})
                .then(response => {return response.data}) 
        },
        logout() {                                                             //Выходим из профиля
                return instance.delete(`auth/login`)
                .then(response => {return response.data}) 
        },
}

export const dialogsAPI = {}
