const inputValidation = (value, {required, minLength, maxLength, minValue, maxValue}) => {
	let isValid = true;
	
	if (required && isValid) {
		isValid = value.trim() !== '';
	}
	if (minLength && isValid) {
		isValid = value.length >= minLength;
	}
	if (maxLength && isValid) {
		isValid = value.length <= maxLength;
	}
	if (minValue && isValid) {
		isValid = parseFloat(value) >= minValue;
	}
	if (maxValue && isValid) {
		isValid = parseFloat(value) <= maxValue;
	}
	
	return isValid;
};

export default inputValidation;
