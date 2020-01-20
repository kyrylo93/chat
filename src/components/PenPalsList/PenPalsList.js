import React from "react";
import PenPalCard from "../PenPalCard/PenPalCard";
import classes from './PenPalsList.module.css';

const PenPalsList = props => {
	
	const penPals = props.penPals.map(el => {
		return (
			<PenPalCard
				key={el.id}
				username={el.username}
				name={el.name}
				email={el.email}
			/>
		)
	});
	
	return (
		<ul className={classes.PenPalsList}>
			{penPals}
		</ul>
	)
};

export default PenPalsList;
