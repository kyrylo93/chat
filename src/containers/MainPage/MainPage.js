import React from "react";
import classes from './MainPage.module.css';
import UserForm from "../../components/UserForm/UserForm";

const MainPage = () => {
	return (
		<section className={classes.MainPage}>
			<h2 className={classes.Title}>Welcome to the chat where you can find new friends</h2>
			<p>Please, fill in the form</p>
			<UserForm />
		</section>
	)
};


export default MainPage;
