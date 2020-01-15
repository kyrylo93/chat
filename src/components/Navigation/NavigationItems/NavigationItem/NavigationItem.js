import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../UI/Logo/Logo";


import classes from './NavigationItem.module.css';

const NavigationItem = props => {
	
	if (props.isLogo) {
		return (
			<NavLink to={props.path} className={[classes.NavigationItem, classes.Logo].join(' ')}><Logo /></NavLink>
		)
	}
	return (
		<NavLink to={props.path} className={classes.NavigationItem}>{props.itemName}</NavLink>
	)
};

export default NavigationItem;
