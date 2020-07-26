import React from 'react'
import classes from './Burger.module.css'

const Burger = props => {
	const cls = [
		classes.Burger,
		'fa',
		props.isOpen ? 'fa-times' : 'fa-bars',
		props.isOpen ? classes.close : null
	]

	return(
		<div>
			<i className={cls.join(' ')} onClick={props.onClick} />
		</div>
	)
}

export default Burger