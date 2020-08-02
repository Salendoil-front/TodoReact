import {combineReducers} from 'redux'
import authReducer from './authReducer'
import todoHomeReducer from './todoHomeReducer'

export default combineReducers({
	auth: authReducer,
	todoHome: todoHomeReducer
})
