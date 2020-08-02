import { AUTH_SUCCESS, AUTH_LOGOUT, TOGGLEMENU } from "../Actions/actionsTypes"

const initialState = {
	titleAuth: 'Авторизация',
	isAuth: true,
	menu:false
}

export default function authReducer(state = initialState, action){
	switch(action.type){
		case AUTH_SUCCESS:
			return{
				...state, token:action.token,isAuth: true
			}
		case AUTH_LOGOUT:
			return{
				...state, isAuth:false, menu:false
			}
		case TOGGLEMENU:
			return{
				...state, menu: !state.menu
			}
		default:
			return state
	}
}