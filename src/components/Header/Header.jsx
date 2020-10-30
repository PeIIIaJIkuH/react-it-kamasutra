import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
	return (
		<header className={s.header}>
			<NavLink to="/profile">
				<img
					className={s.logo}
					src="https://www.flaticon.com/svg/static/icons/svg/685/685680.svg"
					alt="logo"
				/>
			</NavLink>
			<h1 className={s.title}>Social Media</h1>
			<button className={s.login}>Log in</button>
		</header>
	);
};

export default Header;
