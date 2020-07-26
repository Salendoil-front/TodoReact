import React from 'react'
import classes from './TodoUpdate.module.css'

const TodoUpdate = props => {

	return(
		<div className={classes.TodoUpdate}>
			<h1>Rewrite todos</h1>
			<div className={classes.TodoUpdate__main}>
				Title
				<input onChange={props.onChangeTitle} value={props.title}/>
				Description
				<input onChange={props.onChangeDescription} value={props.descrption}/>
				<button onClick={props.UpdateTodos}>Change</button>
			</div>
		</div>
	)
}

export default TodoUpdate