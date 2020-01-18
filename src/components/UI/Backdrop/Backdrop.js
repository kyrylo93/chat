import React from "react";
import classes from './Backdrop.module.css';
const Backdrop = props => (
	<div
		onClick={props.close}
		className={classes.Backdrop}
	/>);

export default Backdrop;
