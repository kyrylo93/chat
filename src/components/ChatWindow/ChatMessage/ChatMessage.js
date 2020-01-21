import React from "react";
import classes from './ChatMessage.module.css';

const ChatMessage = props => {
	return (
		<p className={props.isAuthor ? classes.User : ''}>{props.text}<span>({props.time})</span></p>
	)
};

export default ChatMessage;
