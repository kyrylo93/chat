import React from "react";
import classes from './ChatWindow.module.css';
import ChatMessage from "./ChatMessage/ChatMessage";

const ChatWindow = props => {
	
	const messages = props.messages.map(msg => {
		return <ChatMessage isAuthor={msg.isAuthor} key={Math.random()} text={msg.text} time={msg.time} />
	});
	
	return (
		<section className={classes.ChatWindow} >
			{messages}
		</section>
	)
};

export default ChatWindow;
