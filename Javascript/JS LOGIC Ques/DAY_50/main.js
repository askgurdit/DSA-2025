document.querySelector('.formSubmit').addEventListener('click', (e) => {
    e.preventDefault();

    // Fetch form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const c_password = document.getElementById('confirmPassword').value.trim(); // Fixed ID

    // Regular Expressions
    const usernameRegex = /^[A-Za-z0-9]{3,20}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,20}$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; // Fixed regex
    const phoneRegex = /^[6-9][\d]{9}$/;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach((curElem) => (curElem.textContent = ""));

    let isValid = true;

    // Username Validation
    if (!usernameRegex.test(username)) {
        document.getElementById('usernameError').textContent = "Username must be 3-20 characters (letters & numbers only)";
        isValid = false;
    }

    // Password Validation
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent =
            "Password must have at least 1 uppercase, 1 lowercase, 1 number, 1 special character, and be 8-20 characters long.";
        isValid = false;
    }

    // Email Validation
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = "Enter a valid email (e.g., user@example.com)";
        isValid = false;
    }

    // Phone Validation
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = "Phone number must be 10 digits and start with 6-9";
        isValid = false;
    }

    // Confirm Password Validation
    if (password !== c_password) {
        document.getElementById('confirmPasswordError').textContent = "Passwords do not match";
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        alert("Registration Successful ✅");
        
        // Optional: Reset Form
        document.querySelector('form').reset();
    }
});
