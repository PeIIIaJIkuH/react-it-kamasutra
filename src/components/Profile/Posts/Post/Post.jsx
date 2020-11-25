import React from 'react';
import s from './Post.module.css';

function Post(props) {
	return (
		<div className={s.post}>
			<img src="https://i.pinimg.com/originals/8b/6e/c6/8b6ec60427f9b17c1d9aaf4c415babe3.png" alt="avatar"/>
			<span className="text">{props.text}</span>
		</div>
	);
}

export default Post;
