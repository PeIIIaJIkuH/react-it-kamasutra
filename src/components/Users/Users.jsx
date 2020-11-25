import React from 'react';
import User from './User/User';
import s from './Users.module.css';

function Users(props) {
	let pagesCount = Math.ceil(
		props.usersReducer.usersCount / props.usersReducer.pageSize
	);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) pages.push(i);
	return (
		<main className={s.users}>
			<div className={s.pages}>
				{pages.map(el =>
					<button
						className={`${s.pageButton} ${props.usersReducer.currentPage === el && s.selectedPage}`}
						disabled={props.usersReducer.currentPage === el}
						onClick={() => {props.onPageChange(el);}}
					>
						{el}
					</button>
				)}
			</div>
			<div className={s.userItems}>
				{props.usersReducer.users.map(el =>
					<User user={el} follow={props.follow} unfollow={props.unfollow}
						toggleFollowingInProgress={props.toggleFollowingInProgress}
						followingInProgress={props.usersReducer.followingInProgress}
					/>
				)}
			</div>
		</main>
	);
}

export default Users;
