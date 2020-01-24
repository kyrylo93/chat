import React, {useContext, useState} from "react";
import classes from "./Chat.module.css";
import ChatInput from "../../components/ChatInput/ChatInput";
import {UserFormContext} from "../../context/UserFormContext";
import ChatWindow from "../../components/ChatWindow/ChatWindow";

// TODO -> add a function: when user SetNewMessage => scroll Page down to the last message
// TODO -> 	// sara.scrollTo(500, 500, {behavior: 'smooth'})

const Chat = () => {
	const { userName } = useContext(UserFormContext);
	const [inputValue, setInputValue] = useState('');
	const [messages, setNewMessage] = useState([
		{ isAuthor: false, text: `Hi ${userName.value}, let's go out`, time: '19:33' }
	]);
	
	const addNewMessage = () => {
		const updatedMsgList = [...messages].concat({isAuthor: true, text: inputValue, time: '19:33'});
		setNewMessage(updatedMsgList);
		setInputValue('');
	};
	
	return (
		<section className={classes.Chat}>
			<h2>Chat</h2>
			<ChatWindow
				msgs={messages}
			/>
			<ChatInput
				inputValue={inputValue}
				setInputValue={setInputValue}
				btnClick={addNewMessage}
			/>
		</section>
	)
};

export default Chat;
