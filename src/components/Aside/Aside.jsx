import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Aside.module.css';

const Aside = () => {
	return (
		<aside className={s.aside}>
			<nav className="nav">
				<NavLink
					className={s.navlink}
					activeClassName={s.active}
					to="/profile"
				>
					<img
						src="https://www.flaticon.com/svg/static/icons/svg/1946/1946488.svg"
						alt="house"
					/>
					<span>Profile</span>
				</NavLink>
				<NavLink
					className={s.navlink}
					activeClassName={s.active}
					to="/chats"
				>
					<img
						src="https://www.flaticon.com/svg/static/icons/svg/589/589708.svg"
						alt="chat"
					/>
					<span>Chats</span>
				</NavLink>
				<NavLink
					className={s.navlink}
					activeClassName={s.active}
					to="/news"
				>
					<img
						src="https://www.flaticon.com/svg/static/icons/svg/887/887123.svg"
						alt="news"
					/>
					<span>News</span>
				</NavLink>
				<NavLink
					className={s.navlink}
					activeClassName={s.active}
					to="/music"
				>
					<img
						src="https://www.flaticon.com/svg/static/icons/svg/876/876766.svg"
						alt="music"
					/>
					<span>Music</span>
				</NavLink>
				<NavLink
					className={s.navlink}
					activeClassName={s.active}
					to="/settings"
				>
					<img
						src="https://www.flaticon.com/svg/static/icons/svg/2099/2099058.svg"
						alt="settings"
					/>
					<span>Settings</span>
				</NavLink>
			</nav>
		</aside>
	);
};

export default Aside;
