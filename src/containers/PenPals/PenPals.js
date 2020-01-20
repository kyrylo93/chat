import React, { useState, useEffect } from "react";
import axios from 'axios';

import PenPalsList from "../../components/PenPalsList/PenPalsList";

import classes from './PenPals.module.css';

const PenPals = () => {
	const [ penPalsList, setPenPalsList ] = useState(null);
	
	useEffect(() => {
		axios('https://jsonplaceholder.typicode.com/users')
			.then(res => res.data)
			.then(res => setPenPalsList(res))
	}, []);
	
	return (
		<section className={classes.PenPals}>
			<h2>Please, choose your new pen pal</h2>
			{ penPalsList && <PenPalsList penPals={penPalsList} />}
		</section>
	)
};

export default PenPals;
