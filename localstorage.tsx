import React from 'react'
import { parseJwt } from './main-function'

class AppStorage {
	async setToken(params: string) {
		await localStorage.setItem('token', params)
	}
	async getToken() {
		const appToken: string | null = await localStorage.getItem('token')
		const userData: IUser | null = !appToken ? null : parseJwt(appToken)?.userInfo
		return { token: appToken, user: userData }
	}
	delete() {
		localStorage.clear()
	}
}

const LocalStorage = new AppStorage()
export default LocalStorage
