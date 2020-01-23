import React, { useState, useContext } from "react";
import classes from './UserForm.module.css';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import inputValidation from "../UI/Input/inputValidation";
import { UserFormContext } from "../../context/UserFormContext";
import { SitePageUserContext } from "../../context/SitePageUserContext";

const UserForm = props => {
	const { userName, setUserName } = useContext(UserFormContext);
	const { setUserRegistered } = useContext(SitePageUserContext);
	
	const [userNameConfig, setUserNameState] = useState({
		type: 'text',
		id: 'userName',
		value: userName,
		placeholder: 'Your Name',
		validation: {
			required: true,
			minLength: 3,
			maxLength: 20,
		},
		valid: false,
		touched: false,
	});
	
	const [userAge, setUserAge] = useState({
		type: 'number',
		id: 'userAge',
		value: '',
		placeholder: 'Your Age',
		validation: {
			required: true,
			minValue: 18,
			maxValue: 100,
		},
		valid: false,
		touched: false,
	});
	
	const [userCountry, setUserCountry] = useState({
		type: 'text',
		id: 'userCountry',
		value: '',
		placeholder: 'Your Country',
		validation: {
			required: true,
			minLength: 3,
			maxLength: 25,
		},
		valid: false,
		touched: false,
	});
	
	const formInputs = [userNameConfig, userAge, userCountry];

	const inputHandler = (event, inputType, rules) => {
		const newValue = event.target.value;
		const newIsValid = inputValidation(newValue, rules);
		
		switch (inputType) {
			case 'userName' :
				setUserNameState( prevState => {
					setUserName(newValue);
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
