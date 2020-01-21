import React from "react";
import classes from './PenPalCard.module.css';


const PenPalCard = props => {
	return (
		<article onClick={props.cardClick} className={classes.PenPalCard}>
			<h3>{props.username}</h3>
			<p>{props.name}</p>
			<a
				onClick={ event => event.stopPropagation() }
				href={`mailto: ${props.email}`}
			>{props.email}
			</a>
		</article>
	)
} ;

export default PenPalCard;
