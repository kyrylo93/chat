const inputValidation = (value, rules) => {
	let isValid = true;
	
	if (rules.required && isValid) {
		isValid = value.trim() !== '';
	}
	if (rules.minLength && isValid) {
		isValid = value.length >= rules.minLength;
	}
	if (rules.maxLength && isValid) {
		isValid = value.length <= rules.maxLength;
	}
	if (rules.minValue && isValid) {
		isValid = parseFloat(value) >= rules.minValue;
	}
	if (rules.maxValue && isValid) {
		isValid = parseFloat(value) <= rules.maxValue;
	}
	
	return isValid;
};

export default inputValidation;
