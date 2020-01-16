import React from "react";
import classes from './UserForm.module.css';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const UserForm = () => {
	return (
		<form className={classes.UserForm}>
			<Input type='userName' />
			<Input type='userAge' />
			<Input type='useCountry' />
			<Button btnText='Submit' />
		</form>
	)
};

export default UserForm;
