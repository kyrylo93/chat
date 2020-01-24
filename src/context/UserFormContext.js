import React, {useState} from 'react';

export const UserFormContext = React.createContext({});

export const UserFormProvider = ({children}) => {
	
	const [userName, setUserName] = useState('');
	const [userAge, setUserAge] = useState('');
	const [userCountry, setUserCountry] = useState('');
	
	return (
		<UserFormContext.Provider
			children={children}
			value={{ userName, setUserName, userAge, setUserAge, userCountry, setUserCountry }} />
	)
};


