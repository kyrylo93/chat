import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../UI/Logo/Logo";
import classes from './NavigationItem.module.css';

const NavigationItem = ({itemName, path}) => {
	
	if (itemName === 'Logo') {
		return (
			<NavLink to={path} className={[classes.NavigationItem, classes.Logo].join(' ')}><Logo /></NavLink>
		)
	}
	
	return <NavLink to={path} className={classes.NavigationItem}>{itemName}</NavLink>;
};

export default NavigationItem;
