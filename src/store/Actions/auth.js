import {AUTH_SUCCESS, AUTH_LOGOUT, TOGGLEMENU} from './actionsTypes'

export function auth (login,password){
	return async dispatch => {
		const authData = {
			username : login,
			password,
			returnSecureToken: true
		} 
		 const headers={'Content-Type': 'application/json'}

		try{
			return await fetch('http://176.57.78.17:8095/api/token/',{
				method: 'POST',
				headers: headers,
				body: JSON.stringify(authData)
				}).then(res => res.json())
					.then(res => {
						console.log(res)

						localStorage.setItem('accesstoken', res.access)
						localStorage.setItem('refreshtoken', res.refresh)
						dispatch(authSuccess(res.access))
						console.log(localStorage.getItem('accessToken'))
						
					})

		} catch(e){
		console.log(e)
	}
	}
}

export function authSuccess(token){
	return {
		type: AUTH_SUCCESS,
		token,
		
	}
}

export function logout(){
	localStorage.clear()
	return{
		type: AUTH_LOGOUT,
	}
}

export function toggleMenu(){
	return{
		type: TOGGLEMENU
	}
}