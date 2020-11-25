import React from 'react';
import s from './ProfileInfo.module.css';
import background from '../../../assets/img/profile/background.jpg';
import avatar from '../../../assets/img/profile/avatar.png';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
	if (!props.profileReducer.profile) return <Preloader/>;
	return (
		<div className={s.profileInfo}>
			<img className={s.background} src={background} alt='background'/>
			<img className={s.avatar} src={props.profileReducer.profile.photos.large || avatar} alt='avatar'/>
			<h2 className={s.name}>{props.profileReducer.profile.fullName}</h2>
			<ProfileStatus status={props.profileReducer.status} updateStatus={props.updateStatus}/>
		</div>
	);
};

export default ProfileInfo;
