import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Links.module.css'
import HeaderLinks from '../Links/headerLinks/HeaderLinks'

const Links = props => {

	let links = (
		<ul>
			<li>
				<NavLink to="/" onClick={props.onClick}>Регистрация</NavLink>
			</li>
		</ul>
	)

	if (props.isAuth) {
		links = (
			<ul>
				<li>
					<NavLink to="/todo" onClick={props.onClick}>Дом</NavLink>
				</li>
				<li>
					<NavLink to="/todo" onClick={props.onClick}>Досуг</NavLink>
				</li>
				<li>
					<NavLink to="/todo" onClick={props.onClick}>Работа</NavLink>
				</li>
				<li>
					<button onClick={props.logout}>Выйти из жизни</button>
				</li>
			</ul>
		)
	}

	const cls = [classes.Links]
	if (props.isOpen) {
		cls.push(classes.open)
	}

	return (
		<div className={cls.join(' ')}>
			<HeaderLinks />
			{links}
		</div>
	)
}



export default Links