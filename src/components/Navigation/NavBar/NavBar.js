import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './NavBar.module.css';

const NavBar = () => {
	return (
		<nav className={classes.Toolbar}>
			<NavigationItems />
		</nav>
	)
};

export default NavBar;
