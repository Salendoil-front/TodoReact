import React from 'react'
import classes from './Main.module.css'
import Burger from '../../Components/Menu/Burger/Burger'
import Links from '../../Components/Menu/Links/Links'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { connect } from 'react-redux'
import { logout, toggleMenu } from '../../store/Actions/auth'

class Main extends React.Component  {

	toggleMenuHandler = () => {
		this.setState({
			menu: !this.state.menu
		})
	}

	render(){
		return(
			<div className={classes.Main}>
				<Burger isOpen={this.props.menu} onClick={this.props.toggleMenuHandler} />
				<Links isOpen={this.props.menu} onClick={this.props.toggleMenuHandler} isAuth={this.props.isAuth} logout={this.props.logout} /> 
				{this.props.menu ? <Backdrop onClick={this.props.toggleMenuHandler} /> : null}
				<main>
					{this.props.children}
				</main>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		isAuth : state.auth.isAuth,
		menu: state.auth.menu
	}
}

function mapDispatchToProps(dispatch){
	return{
		logout: () => dispatch(logout()),
		toggleMenuHandler: () => dispatch(toggleMenu())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)