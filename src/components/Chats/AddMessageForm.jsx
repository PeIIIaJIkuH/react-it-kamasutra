import React from 'react';
import {maxLength, required} from '../../utils/validators/validators';
import s from './Chats.module.css';
import {Field, reduxForm} from 'redux-form';
import {TextArea} from '../common/FormControls/FormControls';
import send from '../../assets/img/chats/send.svg';

const maxLength100 = maxLength(100);

const ChatsForm = (props) => {
	return (
		<form className={s.addMessage} onSubmit={props.handleSubmit}>
			<Field className={s.newMessage} name='newMessage' component={TextArea}
			       validate={[required, maxLength100]}/>
			<button className={s.button} type='submit'>
				<img src={send} alt='send'/>
			</button>
		</form>
	);
};

export default reduxForm({form: 'chats'})(ChatsForm);