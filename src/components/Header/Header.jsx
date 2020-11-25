import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

const Header = props => {
	return (
		<header className={s.header}>
			<NavLink to='/profile'>
				<img className={s.logo} src='https://www.flaticon.com/svg/static/icons/svg/685/685680.svg' alt='logo'/>
			</NavLink>
			<h1 className={s.title}>Social Media</h1>
			{props.isAuth ?
				<React.Fragment>
					<div className='username'>{props.login}</div>
					<button onClick={props.logout}>Logout</button>
				</React.Fragment>
				:
				<NavLink to='/login' className={s.login}>Log in</NavLink>}
		</header>
	);
};

export default Header;
