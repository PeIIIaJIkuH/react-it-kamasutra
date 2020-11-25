import React from 'react';
import s from './Login.module.css';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import {login, logout} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {getCaptcha, getIsAuth} from '../../redux/selectors';

const Login = (props) => {
	const onSubmit = (formData) => {
		console.log(formData);
		props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
	};

	if (props.isAuth) return <Redirect to='/profile'/>;

	return (
		<div className={s.login}>
			<h1 className={s.header}>Login</h1>
			<LoginForm onSubmit={onSubmit} captcha={props.captcha}/>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuth: getIsAuth(state),
	captcha: getCaptcha(state)
});

const toDispatch = {login, logout};

export default connect(mapStateToProps, toDispatch)(Login);