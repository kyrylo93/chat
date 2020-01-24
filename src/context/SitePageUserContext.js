import React, { useState } from "react";

export const SitePageUserContext = React.createContext({});

export const SitePageUserAccessProvider = ({children}) => {
	const [isUserRegistered, setUserRegistered] = useState(false);
	const [isPenPalPicked, setUserPickedUser] = useState(false);

	return (
		<SitePageUserContext.Provider children={children} value={{
			isUserRegistered, setUserRegistered,
			isPenPalPicked, setUserPickedUser
		}}/>
	)
};
