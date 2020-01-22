import React, { useState } from "react";

export const SitePageUserContext = React.createContext({});

export const SitePageUserAccess = props => {
	const [isUserRegistered, setUserRegistered] = useState(false);
	const [isUserPickedUser, setUserPickedUser] = useState(false);

	return (
		<SitePageUserContext.Provider children={props.children} value={{
			isUserRegistered, setUserRegistered,
			isUserPickedUser, setUserPickedUser
		}}/>
	)
};
