import React from 'react'
import classes from './TodoBody.module.css'
import TodosItem from '../TodoBody/Todos/TodosItem'

const TodoBody = props => {

	return(
		<ul className={classes.TodoBody}> 
			{props.todos.map((todo) => {
				let id = todo.id
				return(
					<TodosItem
					key={id}
					todosTitle={todo.title}
					todosDescription={todo.description} 
					onDelete={() => props.onDelete(id)}
					showUpdateFrom={() => props.showUpdateFrom(id)} />
				)
			})}
		</ul>
	)
}

export default TodoBody