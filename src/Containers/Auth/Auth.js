import React from 'react'
import classes from './Auth.module.css'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
//import axios from 'axios'


class Auth extends React.Component {

	state = {
		isFormvalid: false,
		formControls: {
			login: {
				value: '',
				type: 'login',
				label: 'Логин',
				errorMessage: 'Введите коректный логин',
				valid: false,
				touched: false,
				validation:{
					required: true,
					login: true
				}
			},
			password: {
				value: '',
				type: 'password',
				label: 'Пароль',
				errorMessage: 'Введите коректный Пароль',
				valid: false,
				touched: false,
				validation:{
					required: true,
					
				}
			}
		}
	}

	loginHandler = async () => {
		const authData = {
			username : this.state.formControls.login.value,
			password: this.state.formControls.password.value,
			returnSecureToken: true
		}
		const headers={'Content-Type': 'application/json'}

		try{
			return await fetch('http://176.57.78.17:8095/api/token/',{
				method: 'POST',
				headers: headers,
				body: JSON.stringify(authData)
				}).then(res => res.json())
					.then(res => {
						console.log(res)
						localStorage.setItem('accesstoken', res.access)
						localStorage.setItem('refreshToken', res.refresh)
						console.log(localStorage)
						console.log('Bearer '+ localStorage.getItem('accesstoken'))
						console.log('Bearer '+ localStorage.getItem('refreshToken'))
					})

		} catch(e){
		console.log(e)
	}
}

		

	registerHandler = () => {

	}

	sumblitHandler = event => {
		event.preventDefault()
	}

	validateControl(value, validation){
		if(!validation){
			return true
		}

		let isValid = true

		if(validation.required){
				isValid = value.trim() !== '' && isValid
		}

		if(validation.minLength){
			isValid = value.length >= validation.minLength && isValid
		}

		return isValid
	}

	onChangeLoginHandler = (event, controlName) => {

		const formControls = {...this.state.formControls}
		const control = {...formControls[controlName]}

		control.value = event.target.value
		control.touched = true
		control.valid = this.validateControl(control.value, control.validation)

		formControls[controlName] = control

		let isFormvalid = true

		Object.keys(formControls).forEach(name => {
			isFormvalid = formControls[name].valid && isFormvalid
		})

		this.setState({
			formControls, isFormvalid
		})
	}

	renderInputs(){
		const inputs = Object.keys(this.state.formControls).map((controlName, index) => {
			const control = this.state.formControls[controlName]
			return(
				<Input 
					key={controlName+index}
					type={control.type}
					value={control.value}
					label={control.label}
					valid={control.valid}
					touched={control.touched}
					errorMessage={control.errorMessage}
					shouldValidate={!!control.validation}
					onChange = {event => {this.onChangeLoginHandler(event, controlName)}}
				/>
			)
		})
		return inputs
	}



	render() {
		return (
			<div className={classes.Auth}>
				<div>
					<h1>Авторизация</h1>

					<form className={classes.AuthForm} onSubmit={this.sumblitHandler}>
						{this.renderInputs()}
						

						<Button type="success" onClick={this.loginHandler} disabled={!this.state.isFormvalid} >Войти</Button>
						<Button type="prymary" onClick={this.registerHandler} disabled={!this.state.isFormvalid} >Зарегистрироваться</Button>
					</form>
				</div>
			</div>
		)
	}
}

export default Auth