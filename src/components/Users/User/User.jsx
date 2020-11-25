import React from 'react';
import s from './User.module.css';
import defaultAvatar from '../../../assets/img/users/defaultAvatar.png';
import {NavLink} from 'react-router-dom';

function User(props) {
	return (
		<div className={s.user} key={props.user.id}>
			<div className={s.userLeft}>
				<NavLink className={s.navlink} to={'/profile/' + props.user.id}>
					<img src={props.user.photos.small !== null ? props.user.photos.small : defaultAvatar} alt='avatar'/>
				</NavLink>
				{props.user.followed
					?
					<button disabled={props.followingInProgress.some(id => id === props.user.id)} className={s.followed}
					        onClick={() => {
						        props.unfollow(props.user.id);
					        }}
					>
						Unfollow
					</button>
					:
					<button
						disabled={props.followingInProgress.some(id => id === props.user.id)} className={s.unfollowed}
						onClick={() => {
							props.follow(props.user.id);
						}}
					>
						Follow
					</button>}
			</div>
			<div className={s.userRight}>
				<NavLink to={'/profile/' + props.user.id} className={s.name}>{props.user.name}</NavLink>
				<div className={s.info}>{props.user.status}</div>
				<div className={s.city}>{'props.user.location.city'}</div>
				<div className={s.country}>{'props.user.location.country'}</div>
			</div>
		</div>
	);
}

export default User;
