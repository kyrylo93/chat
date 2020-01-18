import React from "react";
import classes from './Modal.module.css';
import Button from "../Button/Button";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
	const button = props.btnText
		? <Button
			btnText={props.btnText}
			clicked={props.bntClick}
		/>
		: null;
	
	return (
		<React.Fragment>
			<Backdrop close={() => props.setModalVisibility(false)} />
			<section className={classes.Modal}>
				<h3>{props.title}</h3>
				<p>{props.message}</p>
				{button}
			</section>
		</React.Fragment>
	)
};

export default Modal;
