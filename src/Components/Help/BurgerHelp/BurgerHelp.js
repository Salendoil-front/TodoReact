import React from 'react'
import classes from './BurgerHelp.module.css'

const BurgerHelp = props  => {

	const cls = [
		classes.BurgerHelp,
		'fa',
		props.isOpen ? 'fa-times' : 'fa-bars',
		props.isOpen ? classes.close : null
	]

	return(
		<i className={cls.join(' ')} onClick={props.onClick} />
	)
}

export default BurgerHelp