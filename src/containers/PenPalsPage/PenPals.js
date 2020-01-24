import React, {useState, useEffect, useContext} from "react";
import classes from './PenPals.module.css';

import axios from 'axios';
import { Redirect } from "react-router";
import Modal from "../../components/UI/Modal/Modal";
import { UserFormContext } from "../../context/UserFormContext";
import PenPalsList from "../../components/PenPalsList/PenPalsList";
import {SitePageUserContext} from "../../context/SitePageUserContext";

const PenPals = () => {
	const [isModalVisible, setModalVisible] = useState(false);
	const [doRedirect, setDoRedirect] = useState(false);
	const [ penPalsList, setPenPalsList ] = useState(null);
	
	const { userName } = useContext(UserFormContext);
	const { setUserPickedUser } = useContext(SitePageUserContext);
	
	// TODO move axios request to own Context
	
	useEffect(() => {
		axios('https://jsonplaceholder.typicode.com/users')
			.then(res => res.data)
			.then(res => setPenPalsList(res))
	}, []);
	
	
	if (doRedirect) {
		return <Redirect to={'/chat'} />;
	}
	
	
	const modal = isModalVisible
		? <Modal
			title='You have chosen a user!'
			message="Please, confirm"
			show={isModalVisible}
			btnText='Start chat'
			onClick={() => {
				setUserPickedUser(true);
				setDoRedirect(true);
			}}
			onClose={boolean => setModalVisible(boolean)}
		/>
		: null;
	
	const pickPenPal = () => {
		setModalVisible(true);
	};
	
	return (
		<section className={classes.PenPals}>
			<h2>{userName.value}, please, choose your new pen pal</h2>
			{ penPalsList && <PenPalsList cardClick={pickPenPal} penPals={penPalsList} />}
			{modal}
		</section>
	)
};

export default PenPals;
