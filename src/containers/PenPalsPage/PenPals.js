import React, {useState, useEffect, useContext} from "react";
import { Redirect } from "react-router";
import { UserFormContext } from "../../context/UserFormContext";
import axios from 'axios';
import Modal from "../../components/UI/Modal/Modal";
import PenPalsList from "../../components/PenPalsList/PenPalsList";
import classes from './PenPals.module.css';

const PenPals = () => {
	const [isModalVisible, setModalVisibility] = useState(false);
	const [makeRedirect, setMakeRedirect] = useState(false);
	const [ penPalsList, setPenPalsList ] = useState(null);
	
	useEffect(() => {
		axios('https://jsonplaceholder.typicode.com/users')
			.then(res => res.data)
			.then(res => setPenPalsList(res))
	}, []);
	
	
	const modal = isModalVisible
		? <Modal
			show={isModalVisible}
			title='You have chosen a user!'
			btnText='Start chat'
			bntClick={() => setMakeRedirect(true)}
			message="Please, confirm"
			setModalVisibility={boolean => setModalVisibility(boolean)}
		/>
		: null;
	
	const pickPenPal = () => {
		setModalVisibility(true);
	};
	
	const { userName } = useContext(UserFormContext);
	
	return (
		<section className={classes.PenPals}>
			<h2>{userName}, please, choose your new pen pal</h2>
			{ penPalsList && <PenPalsList cardClick={pickPenPal} penPals={penPalsList} />}
			{modal}
			{makeRedirect ? <Redirect to={'/chat'} /> : null}
		</section>
	)
};

export default PenPals;
