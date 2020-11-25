import {maxLength, required} from '../../../utils/validators/validators';
import s from './Posts.module.css';
import {Field, reduxForm} from 'redux-form';
import {TextArea} from '../../common/FormControls/FormControls';
import add from '../../../assets/img/profile/add.svg';
import React from 'react';

const maxLength10 = maxLength(10);

const PostsForm = (props) => {
	return (
		<form className={s.addPost} onSubmit={props.handleSubmit}>
			<Field className={s.newPost} name='newPost' component={TextArea} validate={[required, maxLength10]}/>
			<button className={s.button} type='submit'>
				<img src={add} alt='add'/>
			</button>
		</form>
	);
};

export default reduxForm({form: 'posts'})(PostsForm);