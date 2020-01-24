import React, {useState} from 'react';

export const UserFormContext = React.createContext({});

export const UserFormProvider = ({children}) => {
	
	const [userName, setUserName] = useState({
		type: 'text',
		id: 'userName',
		value: '',
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
	
	return (
		<UserFormContext.Provider
			children={children}
			value={{ userName, setUserName, userAge, setUserAge, userCountry, setUserCountry }} />
	)
};


