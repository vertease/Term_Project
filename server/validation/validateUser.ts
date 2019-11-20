import isEmpty from 'is-empty';
import Validator from 'validator';

const validateUser = (data: any) => {
	const errors: any = {};

	data.email = !isEmpty(data.email) ? data.email : '';
	data.password = !isEmpty(data.password) ? data.password : '';

	if (Validator.isEmpty(data.email)) {
		errors.email = 'Email field is required.';
	} else if (!Validator.isEmail(data.email)) {
		errors.email = 'Email is invalid.';
	}

	if (Validator.isEmpty(data.password)) {
		errors.password = 'Password field is required.';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

export default validateUser;
