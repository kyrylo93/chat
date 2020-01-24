import React from "react";
import classes from './ChatWindow.module.css';
import ChatMessage from "./ChatMessage/ChatMessage";

const ChatWindow = ({msgs}) => {
	
	const messages = msgs.map(msg => {
		return <ChatMessage isAuthor={msg.isAuthor} key={Math.random()} text={msg.text} time={msg.time} />
	});
	
	return (
		<section className={classes.ChatWindow} >
			{messages}
		</section>
	)
};

export default ChatWindow;
