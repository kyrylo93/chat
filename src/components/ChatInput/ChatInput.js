import React from "react";
import Button from "../UI/Button/Button";
import classes from './ChatInput.module.css';

const ChatInput = ({inputValue, setInputValue, btnClick}) => {
	const isButtonDisabled = inputValue.trim() === '';
	
	return (
		<section className={classes.ChatInput}>
			<textarea
				value={inputValue}
				placeholder={'Your message'}
				onChange={(event) => {
					setInputValue(event.target.value)
				}}
			/>
			<Button
				text='Send'
				disabled={isButtonDisabled}
				onClick={btnClick}
			/>
		</section>
	)
};

export default ChatInput;
