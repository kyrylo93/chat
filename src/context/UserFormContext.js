import React, {useState} from 'react';

export const UserFormContext = React.createContext({});

export const UserFormProvider = props => {
	const [userName, setUserName] = useState('');
	
	return (
		<UserFormContext.Provider
			children={props.children}
			value={{ userName, setUserName }} />
	)
};


