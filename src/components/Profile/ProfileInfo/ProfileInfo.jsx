import React from 'react';
import s from './ProfileInfo.module.css';

function ProfileInfo(props) {
	const info = [
		'Date of birth: 23 February',
		'City: Pavlodar',
		'Education: NU',
		'Website: fnfn.net'
	];
	return (
		<div className={s.profileInfo}>
			<img
				className={s.background}
				src="https://wallpaperaccess.com/full/48756.jpg"
				alt="background"
			/>
			<img
				className={s.avatar}
				src="https://i.pinimg.com/originals/8b/6e/c6/8b6ec60427f9b17c1d9aaf4c415babe3.png"
				alt="avatar"
			/>
			<h2 className="name">PeIIIaJIkuH</h2>
			<div className={s.info}>
				{info.map(el =>
					<div className="item">
						{el}
					</div>
				)}
			</div>
		</div>
	);
}

export default ProfileInfo;
