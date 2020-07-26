import React from 'react'
import classes from './Main.module.css'
import Burger from '../../Components/Menu/Burger/Burger'
import Links from '../../Components/Menu/Links/Links'
import Backdrop from '../../UI/Backdrop/Backdrop'

class Main extends React.Component  {
	constructor(props){
		super(props)
		this.state={
			menu: false
		}
	}

	toggleMenuHandler = () => {
		this.setState({
			menu: !this.state.menu
		})
	}

	render(){
		return(
			<div className={classes.Main}>
				<Burger isOpen={this.state.menu} onClick={this.toggleMenuHandler} />
				<Links isOpen={this.state.menu} onClick={this.toggleMenuHandler} /> 
				{this.state.menu ? <Backdrop onClick={this.toggleMenuHandler} /> : null}
				<main>
					{this.props.children}
				</main>
			</div>
		)
	}
}

export default Main