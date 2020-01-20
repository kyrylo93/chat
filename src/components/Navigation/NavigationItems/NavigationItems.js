import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";


import classes from './NavigationItems.module.css';

const NavigationItems = (props) => {
	
	return (
		<ul className={classes.NavigationItems}>
			<NavigationItem itemName={'Logo'} path={'/'} isLogo />
			<NavigationItem itemName={'Pen pals'} path={'/pen-pals'} disabled />
			<NavigationItem itemName={'Chat'} path={'/chat'} disabled />
		</ul>
	)
};

export default NavigationItems;
