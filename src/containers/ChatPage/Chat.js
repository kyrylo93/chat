import React, {useContext, useState} from "react";
import classes from "./Chat.module.css";
import ChatInput from "../../components/ChatInput/ChatInput";
import ChatWindow from "../../components/ChatWindow/ChatWindow";
import {UserFormContext} from "../../context/UserFormContext";

// TODO -> add a function: when user SetNewMessage => scroll Page down to the last message
// TODO -> 	// sara.scrollTo(500, 500, {behavior: 'smooth'})

const Chat = () => {
	const { userName } = useContext(UserFormContext);
	const [inputValue, setInputValue] = useState('');
	const [messages, setNewMessage] = useState([ { isAuthor: false, text: `Hi ${userName}, let's go out`, time: '19:33' } ]);
	
	const addNewMessage = () => {
		const updatedMsgList = [...messages].concat({isAuthor: true, text: inputValue, time: '19:33'});
		setNewMessage(updatedMsgList);
		setInputValue('');
	};
	
	
	return (
		<section className={classes.Chat}>
			<h2>Chat</h2>
			<ChatWindow
				messages={messages}
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
