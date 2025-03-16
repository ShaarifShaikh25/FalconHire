// Hamburger Menu for Mobile View
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll to Top Button
const scrollToTopButton = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Toggle between Login and Signup forms
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');

signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
});
