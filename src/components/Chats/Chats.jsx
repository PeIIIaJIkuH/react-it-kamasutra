import React from 'react';
import Message from './Message/Message';
import User from './User/User';
import s from './Chats.module.css';
import {Redirect} from 'react-router-dom';
import AddMessageForm from './AddMessageForm';

const Chats = (props) => {
	const users = props.chatsReducer.chats.map(el => <User name={el.name} id={el.id} src={el.src} key={el.id}/>);
	const messages = props.chatsReducer.messages.map((el, i) => <Message text={el} key={i}/>);

	if (!props.isAuth) return <Redirect to='/login'/>;

	const onSubmit = (formData) => {
		props.sendMessage(formData.newMessage);
	};

	return (
		<main className={s.chats}>
			<div className={s.users}>{users}</div>
			<div className={s.chat}>{messages}</div>
			<AddMessageForm onSubmit={onSubmit}/>
		</main>
	);
};

export default Chats;
