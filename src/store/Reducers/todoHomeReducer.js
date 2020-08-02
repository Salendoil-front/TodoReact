import { SAVE_TODOS } from "../Actions/actionsTypes"

const initialState = {
	todos: [
		{
			"id": 2,
			"title": "Дело дрянь",
			"description": "Вы не подключены к интернету",
			"owner": "leha",
			"change_date": "2020-07-25T19:00:43.748693Z",
			"status" : 0
		}
	]
}

export default function todoHomeReducer (state = initialState, action){
	switch(action.type){
		case SAVE_TODOS:
			return{
				...state, todos:action.todos
			}
		default:
			return state
	}
}