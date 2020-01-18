import React from "react";
import classes from './Modal.module.css';
import Button from "../Button/Button";

const Modal = props => {
	const button = props.btnText ? <Button btnText={props.btnText}/> : null;
	
	return (
		<section className={classes.Modal}>
			<h3>{props.title}</h3>
			<p>{props.message}</p>
			{button}
		</section>
	)
};

export default Modal;
