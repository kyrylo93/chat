import React from "react";
import Button from "../UI/Button/Button";
import classes from './ChatInput.module.css';

const ChatInput = props => {
	return (
		<section className={classes.ChatInput}>
			<textarea placeholder={'Your message'} />
			<Button clicked={() => console.log('s')} btnText='Send' />
		</section>
	)
};

export default ChatInput;
