import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Links.module.css'
import HeaderLinks from '../Links/headerLinks/HeaderLinks'

const Links = props => {

	const cls = [classes.Links]
	if(props.isOpen){
		cls.push(classes.open)
	}

	return(
		<div className={cls.join(' ')}>
			<HeaderLinks />
			<ul>
				<li>
					<NavLink to="/" onClick={props.onClick}>Регистрация</NavLink>
				</li>
				<li>
					<NavLink to="/todo" onClick={props.onClick}>Дом</NavLink>
				</li>
				<li>
					<NavLink to="/todo" onClick={props.onClick}>Досуг</NavLink>
				</li>
				<li>
					<NavLink to="/todo" onClick={props.onClick}>Работа</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default Links