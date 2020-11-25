import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Aside.module.css';
import profile from '../../assets/img/aside/profile.svg';
import chats from '../../assets/img/aside/chats.svg';
import news from '../../assets/img/aside/news.svg';
import music from '../../assets/img/aside/music.svg';
import users from '../../assets/img/aside/users.svg';
import settings from '../../assets/img/aside/settings.svg';

const Aside = () => {
	return (
		<aside className={s.aside}>
			<nav className={s.nav}>
				<NavLink
					className={s.navlink}
					activeClassName={s.active}
					to="/profile"
				>
					<img src={profile} alt="house" />
					<span>Profile</span>
				</NavLink>
				<NavLink
					className={s.navlink}
					activeClassName={s.active}
					to="/chats"
				>
					<img src={chats} alt="chat" />
					<span>Chats</span>
				</NavLink>
				<NavLink
					className={s.navlink}
					activeClassName={s.active}
					to="/news"
				>
					<img src={news} alt="news" />
					<span>News</span>
				</NavLink>
				<NavLink
					className={s.navlink}
					activeClassName={s.active}
					to="/music"
				>
					<img src={music} alt="music" />
					<span>Music</span>
				</NavLink>
				<NavLink
					className={s.navlink}
					activeClassName={s.active}
					to="/users"
				>
					<img src={users} alt="user" />
					<span>Users</span>
				</NavLink>
				<NavLink
					className={s.navlink}
					activeClassName={s.active}
					to="/settings"
				>
					<img src={settings} alt="settings" />
					<span>Settings</span>
				</NavLink>
			</nav>
		</aside>
	);
};

export default Aside;
