import React from 'react'
import classes from './TodosItem.module.css'

const TodosItem = props => {

	return(
		<li className={classes.TodosItem}>
			<div className={classes.TodoInfo}>
				<div className={classes.TodoTitle}>{props.todosTitle}</div>
				<div className={classes.TodoDescription}>{props.todosDescription}</div>
			</div>
			<i className="fa fa-trash" onClick={props.onDelete} />
			<i className="fa fa-pen" onClick={props.showUpdateFrom} />
		</li>
	)
}

export default TodosItem