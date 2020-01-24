import React from "react";
import classes from './Modal.module.css';
import Button from "../Button/Button";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({btnText, onClick, onClose, title, message}) => {
	
	const button = btnText
		? <Button
			text={btnText}
			onClick={onClick}
		/>
		: null;
	
	return (
		<>
			<Backdrop close={() => onClose(false)} />
			<section className={classes.Modal}>
				<h3>{title}</h3>
				<p>{message}</p>
				{button}
			</section>
		</>
	)
};

export default Modal;
