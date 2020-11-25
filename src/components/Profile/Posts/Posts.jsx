import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';
import AddPostForm from './AddPostForm';

const Posts = (props) => {
	const posts = props.profileReducer.posts.map(el => <Post text={el.text} key={el.id + 1}/>);

	const onSubmit = (formData) => {
		console.log(formData);
		props.addPost(formData.newPost);
	};

	return (
		<div className={s.posts}>
			<h3 className='header'>New Post</h3>
			<AddPostForm onSubmit={onSubmit}/>
			<div className='postItems'>
				{posts}
			</div>
		</div>
	);
};

export default Posts;
