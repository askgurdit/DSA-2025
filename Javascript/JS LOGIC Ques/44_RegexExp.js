//* Programming Challenge: mail Address Validation //*-

//? You're tasked with implementing a function to validate email addresses using a regular expression. Write a function validateEmail (email) that takes a string email as input and returns true if the email address is valid according to the following rules:

//todo 1: The local part of the email address (before the "@") can contain: 
// Alphanumeric characters (A-Z, a-z, 0-9)
// Special characters: period ".", underscore "_", percent "%", plus hyphen
// Consecutive periods are not allowed



const validateEmail = (email) => {
    return /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test(email);
    };

    console.log(validateEmail("john.doe@example.com")); // true
    console.log(validateEmail("invalid..dot@domain.com"));  // false 
    console.log(validateEmail("missing@dotcom")); // false 
    console.log(validateEmail("no@domain")); // false
    