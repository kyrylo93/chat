import React from "react";

const Input = props => {
	
	switch (props.type) {
		case 'userName' :
			return <input type='text' placeholder='Your Name' />;
		case 'userAge' :
			return  <input type="number" placeholder='Your Age' />;
		case 'useCountry' :
			return <input placeholder='Your Country' type="text"/>;
		default:
			throw new Error('Should be an input type!');
	}
};

export default Input;



