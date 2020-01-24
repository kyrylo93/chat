import React, {useContext, useState} from "react";
import { Redirect } from "react-router";
import classes from './MainPage.module.css';
import UserForm from "../../components/UserForm/UserForm";
import Modal from "../../components/UI/Modal/Modal";
import {SitePageUserContext} from "../../context/SitePageUserContext";

const MainPage = () => {
	const [isModalVisible, setModalVisible] = useState(false);
	const [doRedirect, setDoRedirect] = useState(false);
	const { isUserRegistered, setUserRegistered } = useContext(SitePageUserContext);
	
	if (doRedirect) {
		return <Redirect to='/pen-pals' />;
	}
	
	const modal = isModalVisible
		? <Modal
			show={isModalVisible}
			title='You were a success!'
			btnText='Choose your pen pal'
			onClick={() => {
				setUserRegistered(true);
				setDoRedirect(true);
			}}
			message="Now you can proceed and choose your chat partner"
			onClose={boolean => setModalVisible(boolean)}
		/>
		: null;
	
	const formStatus = !isUserRegistered
		? <UserForm setModalVisible={boolean => setModalVisible(boolean)} />
		: <h2 style={{marginTop: '200px'}}>You're already logged</h2>;
	
	return (
		<section className={classes.MainPage}>
			<h2 className={classes.Title}>Welcome to the chat where you can find new friends</h2>
			<p>Please, fill in the form</p>
			{formStatus}
			{modal}
		</section>
	)
};

export default MainPage;
