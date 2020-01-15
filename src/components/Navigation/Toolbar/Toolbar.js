import React from "react";
import classes from './Toolbar.css';

const Toolbar = () => {
	return (
		<nav className={classes.Toolbar}>
			<p>Logo</p>
			<p>Choose partner</p>
			<p>Chat</p>
		</nav>
	)
};

export default Toolbar;
