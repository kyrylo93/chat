import React from "react";
import classes from './ChatMessage.module.css';

const ChatMessage = ({isAuthor, text, time}) => {
	return (
		<p className={isAuthor ? classes.User : ''}>{text}<span>({time})</span></p>
	)
};

export default ChatMessage;
