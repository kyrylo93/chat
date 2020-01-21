import React, { useState } from "react";
import classes from "./Chat.module.css";
import ChatInput from "../../components/ChatInput/ChatInput";
import ChatWindow from "../../components/ChatWindow/ChatWindow";

const Chat = () => {
	const [inputValue, setInputValue] = useState('');
	const [messages, setNewMessage] = useState([ { isAuthor: false, text: "Hi Barbara, let's go out", time: '19:33' } ]);
	
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
