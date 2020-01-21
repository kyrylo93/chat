import React from "react";
import Button from "../UI/Button/Button";
import classes from './ChatInput.module.css';

const ChatInput = props => {
	const isButtonDisabled = props.inputValue.trim() === '';
	
	return (
		<section className={classes.ChatInput}>
			<textarea
				value={props.inputValue}
				placeholder={'Your message'}
				onChange={(event) => {
					props.setInputValue(event.target.value)
				}}
			/>
			<Button
				btnText='Send'
				disabled={isButtonDisabled}
				clicked={() => console.log('s')}
			/>
		</section>
	)
};

export default ChatInput;
