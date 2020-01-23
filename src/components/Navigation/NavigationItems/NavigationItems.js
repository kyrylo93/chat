import React from "react";
import classes from './NavigationItems.module.css';

import NavigationItem from "./NavigationItem/NavigationItem";


const NavigationItems = () => {
	return (
		<ul className={classes.NavigationItems}>
			<NavigationItem itemName={'Logo'} path={'/'} />
			<NavigationItem itemName={'Pen pals'} path={'/pen-pals'} />
			<NavigationItem itemName={'Chat'} path={'/chat'} />
		</ul>
	)
};

export default NavigationItems;
