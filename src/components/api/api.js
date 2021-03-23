import React from 'react';
import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: { "API-KEY": "879087b0-6726-4a3a-b345-a3063ffa34d8" },
})


export const usersAPI = {
	getUsersPage(currentPage, pagesSize) {                                   //Вывод юзеров, постранично                        
		return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
			.then(response => { return response.data })
	},
	getUsersUnSubscribe(id) {                                              //Отписаться от юзера
		return instance.delete(`follow/${id}`)
			.then(response => { return response.data })
	},
	getUsersSubscribe(id) {                                                //Подписаться  на юзера
		return instance.post(`follow/${id}`)
			.then(response => { return response.data })
	}
}

export const profileAPI = {
	getProfile(userId) {                                                   //Показать профиль выбранного пользователя
		return instance.get(`profile/` + userId)
			.then(response => { return response.data })
	},
	getStatus(userId) {                                                   //Показать профиль выбранного пользователя
		return instance.get(`profile/status/` + userId)
			.then(response => { return response.data })
	},
	updateStatus(status) {                                                   //Показать профиль выбранного пользователя
		return instance.put(`profile/status`, { status: status })
			.then(response => { return response.data })
	},
	addPhoto(photoFile) {                                                   //Показать профиль выбранного пользователя
		const formData = new FormData();
		formData.append('image', photoFile)
		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}
		)
			.then(response => { return response.data })
	},
	saveProfileData(profile) {
		return instance.put(`profile`, profile)
			.then(response => { return response.data })
	}
}

export const authAPI = {
	getAuthMe() {                                                             //Войти в соц сеть под своим именем
		return instance.get(`auth/me`)
			.then(response => { return response.data })  //!ПРОМИС .then ПРОЧИТАТЬ КАК ЭТЬО РАБОТАЕТ
	},
	login(email, password, rememberMe = false, captcha = null) {                               //логинимся в свой профиль                         
		return instance.post(`auth/login`, { email, password, rememberMe, captcha })
			.then(response => { return response.data })
	},
	logout() {                                                             //Выходим из профиля
		return instance.delete(`auth/login`)
			.then(response => { return response.data })
	},
}

export const securityAPI = {
	getCaptcha() {                                                          //Войти в соц сеть под своим именем
		return instance.get(`security/get-captcha-url`)
			.then(response => { return response.data })
	},
}

export const dialogsAPI = {}
