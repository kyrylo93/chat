import React, {useContext} from "react";
import {SitePageUserContext} from "../../context/SitePageUserContext";
import classes from './ErrorPage.module.css';
const ErrorPage = () => {
	const { isUserRegistered, isUserPickedUser } = useContext(SitePageUserContext);
	
	return (
		<section className={classes.ErrorPage}>
			<h3>At first you have to:</h3>
			<p>{isUserRegistered ? '' : '- register -'}</p>
			<p>{isUserPickedUser ? '' : '- choose a user -'}</p>
		</section>
	)
};

export default ErrorPage;
