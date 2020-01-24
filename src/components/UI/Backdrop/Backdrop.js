import React from "react";
import classes from './Backdrop.module.css';
const Backdrop = ({close}) => (
	<div
		onClick={close}
		className={classes.Backdrop}
	/>);

export default Backdrop;
