import React, {useContext} from "react";
import classes from './NavigationItems.module.css';

import NavigationItem from "./NavigationItem/NavigationItem";
import {SitePageUserContext} from "../../../context/SitePageUserContext";


const NavigationItems = () => {
	const { isUserRegistered, isUserPickedUser } = useContext(SitePageUserContext);
	
	const penPalsPath = isUserRegistered ? '/pen-pals' : 'error';
	const chatPalsPath = isUserPickedUser ? '/chat' : 'error';
	
	return (
		<ul className={classes.NavigationItems}>
			<NavigationItem itemName={'Logo'} path={'/'} />
			<NavigationItem itemName={'Pen pals'} path={penPalsPath} />
			<NavigationItem itemName={'Chat'} path={chatPalsPath} />
		</ul>
	)
};

export default NavigationItems;
