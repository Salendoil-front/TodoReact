import React from 'react'
import classes from './Todo.module.css'
import TodoHeader from '../../Components/Todo/TodoHeader/TodoHeader'
import TodoInput from '../../Components/Todo/TodoInput/TodoInput'
import TodoBody from '../../Components/Todo/TodoBody/TodoBody'
import Help from '../../Components/Help/Help'
import BurgerHelp from '../../Components/Help/BurgerHelp/BurgerHelp'
import Backdrop from '../../UI/Backdrop/Backdrop'
import TodoUpdate from '../../Components/Todo/TodoUpdate/TodoUpdate'

class Todo extends React.Component {
	state = {
		update: false,
		menu: false,
		newTodos: false,
		todos: [
			{
				"id": 2,
				"title": "Leha's task",
				"description": "This is lehas task",
				"owner": "leha",
				"change_date": "2020-07-25T19:00:43.748693Z"
			}
		],
		todoDescription: '',
		todoTitle: '',
		todoId: ''
	}

	toggleMenuHandler = () => {
		this.setState({
			menu: !this.state.menu
		})
	}
	changeNewTodosHandler = () => {
		this.setState({
			newTodos: !this.state.newTodos
		})
	}

	showUpdateFrom = (id,index) => {
		this.setState({
			update: !this.state.update,
			todoId:id,
			todoIndex: index
		})
		console.log(this.state.update)
		console.log(this.state.todoId)
	}

	changeTodoDescription = (name) => {
		
		this.setState({
			todoDescription: name
		})
	}

	changeTodoTitle = (name) => {
		/* 
		const todos = this.state.todos
		todos.forEach(obj => {
			if(obj.id === this.state.todoId){
				this.setState({
					todoTitle: obj.title
				})
			}
		}) */
		this.setState({
			todoTitle: name
		})
	}



	pushNewTodos = async () => {
		
		const headers = {
			Authorization: 'Bearer ' + localStorage.getItem('accesstoken'),
			'Content-Type': 'application/json'
		}
		let body = {
			title: this.state.todoTitle,
			description: this.state.todoDescription
		}

		try {
			return await fetch('http://176.57.78.17:8095/testapp/todotasks/', {
				method: 'POST',
				headers: headers,
				body: JSON.stringify(body)
			}).then(res => res.json())
				.then((res,) => {
					console.log(res)

					const todos = this.state.todos
					todos.push(res)
					this.setState({
						todos,
						newTodos: !this.state.newTodos,
						todoDescription: '',
						todoTitle: ''
					})

				})
		} catch (e) {
			console.log(e)
		}
	}

	deleteTodos = (id) => {
		const deleteFromFront = () => {
			const todos = this.state.todos.concat()
			todos.forEach((obj, index) => {
				if(obj.id === id){
					todos.splice(index, 1)
				}
			})
			this.setState({
				todos
			})
			localStorage.setItem('todosKey', this.state.todos)
			console.log(localStorage.getItem('todosKey'))
		}

		console.log(id)
		const headers = {
			Authorization: 'Bearer ' + localStorage.getItem('accesstoken')
		}

		try {
			return fetch('http://176.57.78.17:8095/testapp/todotask/' + id + '/', {
				method: 'DELETE',
				headers: headers
			}).then((res) => {
				if (res.status === 204 || res.status === 404) {
					deleteFromFront()
				}
			})

		} catch (e) {
			console.log(e)
		}


	}

	updateTodo = () => {
		const headers= {
			Authorization: 'Bearer ' + localStorage.getItem('accesstoken'),
			'Content-Type': 'application/json'
		}
		const body = {
			title:this.state.todoTitle,
			description:this.state.todoDescription
		}
		try{
			return fetch(`http://176.57.78.17:8095/testapp/todotask/${this.state.todoId}/`,{
				method:'PATCH',
				headers: headers,
				body: JSON.stringify(body)
			}).then(res => res.json())
				.then(res => {
					console.log(res)
					const todos = this.state.todos
					todos.forEach((obj, index) => {
						if(obj.id === this.state.todoId)
						todos.splice(index, 1, res)
					})
					this.setState({
						todos,
						update: !this.state.update,
						todoId: '',
						todoIndex: ''

					})
				})
		} catch(e){
			console.log(e)
		}
	}

	componentDidMount = async () => {
		const headers = {
			Authorization: 'Bearer ' + localStorage.getItem('accesstoken')
		}

		console.log(localStorage.getItem('accesstoken'))
		try {
			return await fetch('http://176.57.78.17:8095/testapp/todotasks/', {
				method: 'GET',
				headers: headers
			}).then(res => res.json())
				.then(res => {
					this.setState({
						todos: res
					})
					console.log(this.state.todos)
				})

		} catch{
			const data = localStorage.getItem('todosKey')
			if (data) {
				let todos = data
				console.log(todos)
				const todosArr = todos.split(',')
				console.log(todosArr)
				this.setState({
					todos: todosArr
				})
			}
		}
	}

	render() {
		return (
			<div className={classes.Todo}>
				<div>
					<Help isOpen={this.state.menu} allTodos={this.state.todos.length} />
					<BurgerHelp isOpen={this.state.menu} onClick={this.toggleMenuHandler} />
					{this.state.menu ? <Backdrop onClick={this.toggleMenuHandler} /> : null}
					<div className={classes.TodoInner}>
						<TodoHeader />
						<TodoInput
							onChangeTitle={(event) => this.changeTodoTitle(event.target.value)}
							onChangeDescription={(event) => this.changeTodoDescription(event.target.value)}
							onClick={this.changeNewTodosHandler}
							newTodos={this.state.newTodos}
							onPush={this.pushNewTodos}
							title={'Начать новое дело'}
						/>

						<TodoBody todos={this.state.todos} onDelete={this.deleteTodos} showUpdateFrom={this.showUpdateFrom} />
						
						{this.state.update
							? <TodoUpdate
								onChangeTitle={(event,id) => this.changeTodoTitle(event.target.value)}
								onChangeDescription={(event) => this.changeTodoDescription(event.target.value)}
								UpdateTodos={this.updateTodo}
								title={this.state.todoTitle}
								descrption={this.state.todoDescription}
								/>
							: null
						}
						
					</div>
				</div>
			</div>
		)
	}
}

export default Todo