import React, {useContext} from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import { SitePageUserContext } from "../../../context/SitePageUserContext";

import classes from './NavigationItems.module.css';

const NavigationItems = () => {
	const { isUserRegistered, isUserPickedUser } = useContext(SitePageUserContext);
	
	return (
		<ul className={classes.NavigationItems}>
			<NavigationItem itemName={'Logo'} path={'/'} />
			<NavigationItem itemName={'Pen pals'} path={'/pen-pals'} disabled={!isUserRegistered} />
			<NavigationItem itemName={'Chat'} path={'/chat'} disabled={!isUserRegistered && !isUserPickedUser} />
		</ul>
	)
};

export default NavigationItems;
