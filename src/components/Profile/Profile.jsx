import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './Posts/Posts';
import s from './Profile.module.css';

const Profile = props => {
	return (
		<main className={s.profile}>
			<ProfileInfo info={props.store.getState().profileReducer.info} />
			<Posts
				store={props.store}
				profileReducer={props.store.getState().profileReducer}
				dispatch={props.dispatch}
			/>
		</main>
	);
};

export default Profile;
