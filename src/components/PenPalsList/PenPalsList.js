import React from "react";
import PenPalCard from "./PenPalCard/PenPalCard";
import classes from './PenPalsList.module.css';

const PenPalsList = ({penPals, cardClick}) => {
	const penPalsList = penPals.map(el => {
		return (
			<PenPalCard
				key={el.id}
				name={el.name}
				email={el.email}
				username={el.username}
				cardClick={() =>
					cardClick({ id: el.id, username: el.username})
				}
			/>
		)
	});
	
	return (
		<ul className={classes.PenPalsList}>
			{penPalsList}
		</ul>
	)
};

export default PenPalsList;
