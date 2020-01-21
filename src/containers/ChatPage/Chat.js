import React from "react";
import classes from "./Chat.module.css";
import ChatInput from "../../components/ChatInput/ChatInput";

const Chat = props => {
	return (
		<section className={classes.Chat}>
			<h2>Chat</h2>
			<ChatInput />
		</section>
	)
};

export default Chat;
