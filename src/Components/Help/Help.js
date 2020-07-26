import React from 'react'
import classes from './Help.module.css'


const Help = props => {

	const cls = [classes.Help]
	if(props.isOpen){
		cls.push(classes.open)
	}

	return(
		<div className={cls.join(' ')}>
			<ul>
				<li>
					<p>Всего дел: {props.allTodos}</p>
				</li>
			</ul>
		</div>
	)
}

export default Help