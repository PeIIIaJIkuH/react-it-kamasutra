import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer';

const Profile = props => {
	return (
		<main className={s.profile}>
			<ProfileInfo />
			<PostsContainer />
		</main>
	);
};

export default Profile;
