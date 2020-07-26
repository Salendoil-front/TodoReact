import React from 'react'
import classes from './TodoFooter.module.css'

const TodoFooter = props => {

	return(
		<div className={classes.TodoFooter}>
			<button onClick={props.onClick}>Сохранить</button>
			<button onClick={props.onClear}>Очистить</button>
		</div>
	)
}

export default TodoFooter