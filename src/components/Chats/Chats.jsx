import React from 'react';
import Message from './Message/Message';
import User from './User/User';
import s from './Chats.module.css';

function Chats(props) {
	const users = props.chatsReducer.chats.map(el =>
		<User name={el.name} id={el.id} src={el.src} />
	);
	const messages = props.chatsReducer.messages.map(el =>
		<Message text={el} />
	);
	const newMessage = props.chatsReducer.newMessage;

	const onSendMessage = () => {
		if (props.chatsReducer.newMessage) props.sendMessage();
	};

	const onUpdateNewMessage = e => {
		const text = e.target.value;
		props.updateNewMessage(text);
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
					onChange={onUpdateNewMessage}
					value={newMessage}
				/>
				<button className={s.button} onClick={onSendMessage}>
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
