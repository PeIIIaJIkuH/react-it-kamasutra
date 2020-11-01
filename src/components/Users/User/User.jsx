import React from 'react';
import s from './User.module.css';

function User(props) {
	return (
		<div className={s.user} key={s.id}>
			<div className={s.userLeft}>
				<img src={props.user.avatar} alt="avatar" />
				{props.user.following
					? <button
							className={s.followed}
							onClick={() => {
								props.unfollow(props.user.id);
							}}
						>
							Unfollow
						</button>
					: <button
							className={s.unfollowed}
							onClick={() => {
								props.follow(props.user.id);
							}}
						>
							Follow
						</button>}
			</div>
			<div className={s.userRight}>
				<div className={s.name}>
					{props.user.name}
				</div>
				<div className={s.info}>
					{props.user.info}
				</div>
				<div className={s.city}>
					{props.user.location.city}
				</div>
				<div className={s.country}>
					{props.user.location.country}
				</div>
			</div>
		</div>
	);
}

export default User;
