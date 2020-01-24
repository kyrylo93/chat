import React from "react";
import classes from './Button.module.css';
const Button = ({disabled, onClick, text}) => {
	return (
		<button
			disabled={disabled}
			className={classes.Button}
			onClick={onClick}
		>
			{text}
		</button>
	)
};

export default Button;
