import React from 'react'
import classes from './TodoInput.module.css'

const TodoInput = props => {

	return (
		<div className={classes.TodoInput}>
			{props.newTodos 
			? <div className={classes.TodoInputs}> Title<input onChange={props.onChangeTitle} /> Description<input onChange={props.onChangeDescription} /></div>
			: <button className={classes.btnBegin} onClick={props.onClick}>{props.title}</button>}
			{props.newTodos 
			? <button 
					className={classes.btnSend} 
					onClick={props.onPush}
					
				>Записать</button> : null}
		</div>
	)
}

export default TodoInput