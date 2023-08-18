import axios from "axios";
// import Cookies from 'js-cookie'
import api from '@/utils/api'
import { router } from '../routes'

const config = (token) => {
	return {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	}

};

const login = (user) => {
	return axios.post(api + "/auth/login/", user);
};

const register = (data) => {
	return axios.post(api + '/users/register', data)
}
function isAuthenticated() {
	const token = $cookies.get('auth')
	return token !== null;
}

function fetchUser(token) {
	return axios.get(api + '/profile', {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	})
}

function fetchTasks(token) {
	return axios.get(api + '/profile/my-tasks', {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	})
}
function logout() {
	// sessionStorage.clear()
	if ($cookies.get('auth')) {
		$cookies.remove('auth')
		router.push('/login')
	}
}

export default {
	login, register, isAuthenticated, logout,
	fetchUser, fetchTasks
};
