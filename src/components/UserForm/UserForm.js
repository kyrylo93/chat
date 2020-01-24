import React, {useContext, useState} from "react";
import classes from './UserForm.module.css';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import inputValidation from "../UI/Input/inputValidation";
import { UserFormContext } from "../../context/UserFormContext";

const UserForm = ({setModalVisible}) => {
	const [userNameValidation, setUserNameValidation] = useState({
		type: 'text',
		id: 'userName',
		placeholder: 'Your Name',
		validation: {
			required: true,
			minLength: 3,
			maxLength: 20,
		},
		valid: false,
		touched: false,
	});
	
	const [userAgeValidation, setUserAgeValidation] = useState({
		type: 'number',
		id: 'userAge',
		placeholder: 'Your Age',
		validation: {
			required: true,
			minValue: 18,
			maxValue: 100,
		},
		valid: false,
		touched: false,
	});
	
	const [userCountryValidation, setUserCountryValidation] = useState({
		type: 'text',
		id: 'userCountry',
		placeholder: 'Your Country',
		validation: {
			required: true,
			minLength: 3,
			maxLength: 25,
		},
		valid: false,
		touched: false,
	});
	
	const { setUserName, setUserAge, setUserCountry } = useContext(UserFormContext);
	
	const formInputs = [userNameValidation, userAgeValidation, userCountryValidation];

	const inputHandler = (event, inputType, rules) => {
		const newValue = event.target.value;
		const newIsValid = inputValidation(newValue, rules);
		
		switch (inputType) {
			case 'userName' :
				setUserName(newValue);
				setUserNameValidation( prevState => {
					return {
						...prevState,
						touched: true,
						valid: newIsValid,
					};
				});
				break;
				
			case 'userAge' :
				setUserAge(newValue);
				setUserAgeValidation(prevState => {
					return {
						...prevState,
						touched: true,
						valid: newIsValid,
					}
				});
				break;
				
			case 'userCountry' :
				setUserCountry(newValue);
				setUserCountryValidation(prevState => {
					return {
						...prevState,
						touched: true,
						valid: newIsValid,
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
		
		return !(sum === formInputs.length);
	};
	
	const submitHandler = (event) => {
		event.preventDefault();
		setModalVisible(true);
	};
	
	const inputs = formInputs.map(input => {
		 return (
		 	<Input
			    key={input.id}
				type = {input.type}
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
				text='Submit'
				disabled={checkFormValid()}
				onClick={submitHandler} />
		</form>
	)
};

export default UserForm;
