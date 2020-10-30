import React from 'react';
import s from './Message.module.css';

function Message(props) {
	return (
		<div className="message">
			<p className={s.text}>
				{props.text}
			</p>
		</div>
	);
}

export default Message;
