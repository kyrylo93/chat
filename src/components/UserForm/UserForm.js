import React, { useContext } from "react";
import classes from './UserForm.module.css';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import inputValidation from "../UI/Input/inputValidation";
import { UserFormContext } from "../../context/UserFormContext";
import { SitePageUserContext } from "../../context/SitePageUserContext";

const UserForm = props => {
	const { userName, setUserName, userAge, setUserAge, userCountry, setUserCountry } = useContext(UserFormContext);
	const { setUserRegistered } = useContext(SitePageUserContext);
	
	const formInputs = [userName, userAge, userCountry];

	const inputHandler = (event, inputType, rules) => {
		const newValue = event.target.value;
		const newIsValid = inputValidation(newValue, rules);
		
		switch (inputType) {
			case 'userName' :
				setUserName( prevState => {
					return {
						...prevState,
						value: newValue,
						valid: newIsValid,
						touched: true,
					};
				});
				break;
				
			case 'userAge' :
				setUserAge(prevState => {
					return {
						...prevState,
						value: newValue,
						valid: newIsValid,
						touched: true,
					}
				});
				break;
				
			case 'userCountry' :
				setUserCountry(prevState => {
					return {
						...prevState,
						value: newValue,
						valid: newIsValid,
						touched: true,
					}
				});
				break;
				
			default:
				throw new Error('Should be an input type!');
		}
	};
	
	const checkFormValid = () => {
		let sum = formInputs.reduce((acc, value) => {
			return value.valid ? acc + 1 : acc;
		}, 0);
		
		setUserRegistered(sum === formInputs.length);
		
		return !(sum === formInputs.length);
	};
	
	const submitHandler = (event) => {
		event.preventDefault();
		props.setModalVisibility(true);
	};
	
	const inputs = formInputs.map(input => {
		 return (
		 	<Input
			    key={input.id}
				type = {input.type}
				value = {input.value}
			    isValid = {input.valid}
			    isTouched = {input.touched}
				placeholder = {input.placeholder}
				inputHandler = {(event) => inputHandler(event, input.id, input.validation)}
			/>)
	});
	
	return (
		<form className={classes.UserForm} onSubmit={submitHandler}>
			{inputs}
			<Button
				btnText='Submit'
				disabled={checkFormValid()}
				clicked={(e) => submitHandler(e)} />
		</form>
	)
};

export default UserForm;
