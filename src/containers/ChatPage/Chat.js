import React, { useState } from "react";
import classes from "./Chat.module.css";
import ChatInput from "../../components/ChatInput/ChatInput";

const Chat = props => {
	const [inputValue, setInputValue] = useState('');
	
	return (
		<section className={classes.Chat}>
			<h2>Chat</h2>
			<ChatInput
				inputValue={inputValue}
				setInputValue={setInputValue}
			/>
		</section>
	)
};

export default Chat;
