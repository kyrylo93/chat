import React from "react";
import classes from './Input.module.css';

const Input = props => {
	
	return (
		<input
			type = {props.type}
			value = {props.value}
			onChange={props.inputHandler}
			placeholder = {props.placeholder}
			className={ props.isTouched ? props.isValid ? classes.Valid : classes.Invalid : null}
		/>)
};

export default Input;



