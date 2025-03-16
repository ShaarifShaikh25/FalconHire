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

// Get the modals
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');

// Get the buttons that open the modals
const openLoginBtn = document.getElementById('open-login-signup');

// Get the <span> elements that close the modals
const closeLoginBtn = document.getElementById('closeLoginBtn');
const closeSignupBtn = document.getElementById('closeSignupBtn');

// When the user clicks the login/signup button, open the login modal by default
openLoginBtn.onclick = function() {
    loginModal.style.display = 'block';
}

// When the user clicks the close button for login modal, close it
closeLoginBtn.onclick = function() {
    loginModal.style.display = 'none';
}

// When the user clicks the close button for signup modal, close it
closeSignupBtn.onclick = function() {
    signupModal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target == signupModal) {
        signupModal.style.display = 'none';
    }
}

