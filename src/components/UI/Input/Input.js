import React from "react";
import classes from './Input.module.css';

const Input = ({type, value, inputHandler, placeholder, isTouched, isValid}) => {
	
	return (
		<input
			type = {type}
			value = {value}
			onChange={inputHandler}
			placeholder = {placeholder}
			className={ isTouched ? isValid ? classes.Valid : classes.Invalid : null}
		/>)
};

export default Input;



