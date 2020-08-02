import { SAVE_TODOS } from "./actionsTypes"

export function todoHomeGetTodos (){
	return async dispatch => {
		const headers = {
			Authorization: 'Bearer ' + localStorage.getItem('accesstoken')
		}

		try{
			return await fetch('http://176.57.78.17:8095/testapp/todotasks/?page=1',{
				headers:headers,
				method: 'GET'
			}).then(res => res.json())
				.then(res => {
					dispatch(saveTodos(res.results))
				})
		} catch(e){
			console.log(e)
		}
	}
}

export function saveTodos(todos){
	return{
		type: SAVE_TODOS,
		todos
	}
}

export function todoHomePushTodo(title, description){
	return async dispatch => {
		const headers = {
			Authorization: 'Bearer ' + localStorage.getItem('accesstoken'),
			'Content-Type': 'application/json'
		}

		const body = {
			title,
			description,
			status: 0
		}

		try{
			return await fetch('http://176.57.78.17:8095/testapp/todotasks/',{
				method: 'POST',
				headers,
				body: JSON.stringify(body)
			}).then(res => res.json())
				.then(res => console.log(res))
		} catch(e){
			console.log(e)
		}
	}
}