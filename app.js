// Handle switching between login and signup forms
document.getElementById('show-signup').addEventListener('click', function() {
    document.getElementById('login-form-container').style.display = 'none';
    document.getElementById('signup-form-container').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('signup-form-container').style.display = 'none';
    document.getElementById('login-form-container').style.display = 'block';
});

// Handle Login Form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple login validation
    if (email && password) {
        alert('Login successful');
        // Redirect to the dashboard or homepage (for now, using alert)
        window.location.href = 'dashboard.html';
    } else {
        alert('Please fill out both fields');
    }
});

// Handle Signup Form submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email-signup').value;
    const password = document.getElementById('password-signup').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Simple signup validation
    if (password === confirmPassword) {
        alert('Signup successful');
        // Redirect to login page
        window.location.href = 'login.html';
    } else {
        alert('Passwords do not match');
    }
});
