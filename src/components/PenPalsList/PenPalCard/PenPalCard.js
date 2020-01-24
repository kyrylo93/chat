import React from "react";
import classes from './PenPalCard.module.css';


const PenPalCard = ({cardClick, username, name, email}) => {
	return (
		<article onClick={cardClick} className={classes.PenPalCard}>
			<h3>{username}</h3>
			<p>{name}</p>
			<a
				onClick={ event => event.stopPropagation() }
				href={`mailto: ${email}`}
			>{email}
			</a>
		</article>
	)
} ;

export default PenPalCard;
