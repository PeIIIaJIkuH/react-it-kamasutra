import React from 'react';
import Message from './Message/Message';
import User from './User/User';
import s from './Chats.module.css';
import {
	sendMessageCreator,
	updateNewMessageCreator
} from '../../redux/chats-reducer';

function Chats(props) {
	const chatsReducer = props.store.getState().chatsReducer;

	debugger;

	const users = chatsReducer.chats.map(el =>
		<User name={el.name} id={el.id} src={el.src} />
	);
	const messages = chatsReducer.messages.map(el => <Message text={el} />);

	const sendMessage = () => {
		if (props.getState().newMessage)
			props.store.dispatch(sendMessageCreator());
	};

	const updateNewMessage = e => {
		let text = e.target.value;
		props.store.dispatch(updateNewMessageCreator(text));
	};

	return (
		<main className={s.chats}>
			<div className={s.users}>
				{users}
			</div>
			<div className={s.chat}>
				{messages}
			</div>
			<div className={s.addMessage}>
				<textarea
					className={s.newMessage}
					name="newMessage"
					onChange={updateNewMessage}
					value={chatsReducer.newMessage}
				/>
				<button className={s.button} onClick={sendMessage}>
					<img
						src="https://www.flaticon.com/svg/static/icons/svg/3652/3652532.svg"
						alt="send"
					/>
				</button>
			</div>
		</main>
	);
}

export default Chats;
