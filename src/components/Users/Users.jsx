import React from 'react';
import User from './User/User';
import s from './Users.module.css';

function Users(props) {
	const users = props.usersReducer.users.map(el =>
		<User user={el} follow={props.follow} unfollow={props.unfollow} />
	);

	return (
		<main className={s.main}>
			<div className={s.users}>
				{users}
			</div>
		</main>
	);
}

export default Users;
