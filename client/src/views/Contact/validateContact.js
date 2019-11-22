import Validator from 'validator';
import isEmpty from "is-empty";

export default (inputs) => {
    const errors = {};
    inputs.email = !isEmpty(inputs.email) ? inputs.email : '';
    inputs.subject = !isEmpty(inputs.subject) ? inputs.subject : '';
    inputs.text = !isEmpty(inputs.text) ? inputs.text : '';

    if (isEmpty(inputs.email)) {
        errors.email = 'You must provide an email address.';
    } else if (!Validator.isEmail(inputs.email)) {
        errors.email = 'The email you provided is invalid.';
    }

    if (isEmpty(inputs.subject)) {
        errors.subject = 'This is a required field.';
    }

    if (isEmpty(inputs.text)) {
        errors.text = 'This is a required field.';
    } else if (inputs.text.length < 16) {
        errors.text = 'Your message must be at least 16 characters long.'
    }

    if (!inputs.captcha) {
        errors.captcha = 'You must complete the captcha to submit this form.'
    }

    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
    
};