import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './User.module.css';

function User(props) {
	return (
		<NavLink
			className={s.user}
			to={`/chats/${props.id}`}
			activeClassName={s.active}
		>
			<img src={props.src} alt="avatar" />
			<span>
				{props.name}
			</span>
		</NavLink>
	);
}

export default User;
