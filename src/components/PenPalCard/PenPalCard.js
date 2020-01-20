import React from "react";
import classes from './PenPalCard.module.css';

const PenPalCard = props => {
	return (
		<article className={classes.PenPalCard}>
			<h3>{props.username}</h3>
			<p>{props.name}</p>
			<a href = {`mailto: ${props.email}`}>{props.email}</a>
		</article>
	)
} ;

export default PenPalCard;
