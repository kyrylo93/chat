import React, {useContext} from "react";
import {SitePageUserContext} from "../../context/SitePageUserContext";
import classes from './ErrorPage.module.css';
const ErrorPage = () => {
	const { isUserRegistered, isPenPalPicked } = useContext(SitePageUserContext);
	
	return (
		<section className={classes.ErrorPage}>
			<h3>At first you have to:</h3>
			<p>{isUserRegistered ? '' : '- register -'}</p>
			<p>{isPenPalPicked ? '' : '- choose a user -'}</p>
		</section>
	)
};

export default ErrorPage;
