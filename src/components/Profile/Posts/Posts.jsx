import React from 'react';
import {
	addPostCreator,
	updateNewPostCreator
} from '../../../redux/profile-reducer';
import Post from './Post/Post';
import s from './Posts.module.css';

function Posts(props) {
	debugger;
	let textarea = React.createRef();

	const addPost = () => {
		let text = textarea.current.value;
		if (text) props.store.dispatch(addPostCreator());
	};

	const updateNewPost = () => {
		let text = textarea.current.value;
		props.store.dispatch(updateNewPostCreator(text));
	};

	return (
		<div className={s.posts}>
			<h3 className="header">New Post</h3>
			<div className={s.addPost}>
				<textarea
					className={s.newPost}
					ref={textarea}
					name="newPost"
					value={props.store.getState().profileReducer.newPost}
					onChange={updateNewPost}
				/>
				<div className={s.wrapper}>
					<button className={s.button} onClick={addPost}>
						<img
							src="https://www.flaticon.com/svg/static/icons/svg/1828/1828819.svg"
							alt="add"
						/>
					</button>
				</div>
			</div>
			<div className="postItems">
				{props.store
					.getState()
					.profileReducer.posts.map(el => <Post text={el.text} />)}
			</div>
		</div>
	);
}

export default Posts;
