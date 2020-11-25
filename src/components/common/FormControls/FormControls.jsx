import React from 'react';
import s from './FormControls.module.css';

const FormControl = ({input, meta, children, ...props}) => {
	const isError = meta.error && meta.touched;
	return (
		<div className={s.wrapper + ' ' + (isError && s.error)}>
			{children}
			{isError && <span>{meta.error}</span>}
		</div>
	);
};

export const TextArea = (props) => {
	const {input, meta, children, ...restProps} = props;
	return (
		<FormControl {...props}>
			<textarea {...input} {...restProps}/>
		</FormControl>);

};

export const Input = (props) => {
	const {input, meta, children, ...restProps} = props;
	return (
		<FormControl {...props}>
			<input {...input} {...restProps}/>
		</FormControl>);
};