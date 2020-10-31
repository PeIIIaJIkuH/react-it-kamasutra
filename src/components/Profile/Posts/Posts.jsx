import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';

function Posts(props) {
	const posts = props.profileReducer.posts.map(el => <Post text={el.text} />);

	const onAddPost = () => {
		if (props.profileReducer.newPost) props.addPost();
	};

	const onUpdateNewPost = e => {
		const text = e.target.value;
		props.updateNewPost(text);
	};

	return (
		<div className={s.posts}>
			<h3 className="header">New Post</h3>
			<div className={s.addPost}>
				<textarea
					className={s.newPost}
					name="newPost"
					value={props.profileReducer.newPost}
					onChange={onUpdateNewPost}
				/>
				<div className={s.wrapper}>
					<button className={s.button} onClick={onAddPost}>
						<img
							src="https://www.flaticon.com/svg/static/icons/svg/1828/1828819.svg"
							alt="add"
						/>
					</button>
				</div>
			</div>
			<div className="postItems">
				{posts}
			</div>
		</div>
	);
}

export default Posts;
