import React from "react";
import classes from './Button.module.css';
const Button = props => {
	return (
		<button className={classes.Button}>{props.btnText}</button>
	)
};

export default Button;
