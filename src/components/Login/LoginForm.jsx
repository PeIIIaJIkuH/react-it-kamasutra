import s from './Login.module.css';
import {Field, reduxForm} from 'redux-form';
import React from 'react';
import {Input} from '../common/FormControls/FormControls';
import {required} from '../../utils/validators/validators';

const LoginForm = (props) => {
	return (
		<form className={s.form} onSubmit={props.handleSubmit}>
			<div className={s.formGroup}>
				<label htmlFor='email'>Email</label>
				<Field name='email' component={Input} type='email' validate={[required]}/>
			</div>
			<div className={s.formGroup}>
				<label htmlFor='password'>Password</label>
				<Field name='password' component={Input} type='password' validate={[required]}/>
			</div>
			<div className={s.formGroup}>
				<label htmlFor='rememberMe'>Remember me</label>
				<Field name='rememberMe' component={Input} type='checkbox'/>
			</div>
			{props.captcha &&
			<div className={s.formGroup}>
				<label htmlFor='captcha'>Captcha</label>
				<img src={props.captcha} alt='captcha'/>
				<Field name='captcha' component={Input} type='text'/>
			</div>
			}
			<button type='submit' className={s.btn}>Login</button>
			{props.error &&
			<div className={s.error}>
				{props.error}
			</div>}
		</form>
	);
};

export default reduxForm({form: 'login'})(LoginForm);