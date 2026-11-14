/* ======================================================== */
/* 1. Dynamic Elements & Events (Wishlist)                  */
/* ======================================================== */

let myWishlist = [];

function addToWishlist(productName, buttonElement) {
    if (myWishlist.includes(productName)) {
        alert("The item '" + productName + "' is already in your wishlist!");
    } else {
        myWishlist.push(productName);
        alert("The item '" + productName + "' has been added to your wishlist! We will notify you once it drops in the market.");
        console.log("Current Wishlist: ", myWishlist);

        buttonElement.textContent = 'Added ✓';
        buttonElement.style.backgroundColor = 'var(--primary-purple)';
        buttonElement.style.color = 'white';
    }
}

/* ======================================================== */
/* 2. Form Validation (Login, Logout & Sign Up)             */
/* ======================================================== */

function setupLoginValidation() {
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');
    const logoutBtn = document.getElementById('logout-btn');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value.trim();

            if (email === '' || !email.includes('@')) {
                loginMessage.textContent = 'Please enter a valid email address.';
                loginMessage.style.color = '#f87171';
                return;
            }

            if (password.length < 8) {
                loginMessage.textContent = 'Password must be at least 8 characters long.';
                loginMessage.style.color = '#f87171';
                return;
            }

            const userData = { email: email, name: email.split('@')[0] };
            localStorage.setItem('fashionDesignUser', JSON.stringify(userData));

            loginMessage.textContent = 'Login successful! Redirecting to Home...';
            loginMessage.style.color = '#4ade80';

            setTimeout(function () {
                window.location.href = 'index.html';
            }, 1200);
        });
    }

    if (logoutBtn && loginMessage) {
        logoutBtn.addEventListener('click', function () {
            localStorage.removeItem('fashionDesignUser');
            loginMessage.textContent = 'You have been logged out successfully.';
            loginMessage.style.color = '#c084fc';
            updateHeaderAccount();
        });
    }
}

function setupSignupValidation() {
    const signupForm = document.getElementById('signup-form');
    const signupMessage = document.getElementById('signup-message');

    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const fullName = document.getElementById('signup-name').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const password = document.getElementById('signup-password').value.trim();
            const confirmPassword = document.getElementById('confirm-password').value.trim();

            if (fullName.length < 3) {
                signupMessage.textContent = 'Please enter your full name (at least 3 characters).';
                signupMessage.style.color = '#f87171';
                return;
            }

            if (!email.includes('@') || !email.includes('.')) {
                signupMessage.textContent = 'Please enter a valid email address.';
                signupMessage.style.color = '#f87171';
                return;
            }

            if (password.length < 8) {
                signupMessage.textContent = 'Password must be at least 8 characters.';
                signupMessage.style.color = '#f87171';
                return;
            }

            if (password !== confirmPassword) {
                signupMessage.textContent = 'Passwords do not match! Please try again.';
                signupMessage.style.color = '#f87171';
                return;
            }

            const userData = { email: email, name: fullName };
            localStorage.setItem('fashionDesignUser', JSON.stringify(userData));

            signupMessage.textContent = 'Account created successfully! Redirecting to Login...';
            signupMessage.style.color = '#4ade80';

            setTimeout(function () {
                window.location.href = 'login.html';
            }, 1200);
        });
    }
}

function updateHeaderAccount() {
    const savedUser = localStorage.getItem('fashionDesignUser');
    const loginLink = document.querySelector('nav a[href="login.html"]');

    if (savedUser && loginLink) {
        const user = JSON.parse(savedUser);
        loginLink.textContent = 'Hi, ' + user.name;
        loginLink.classList.add('customer-account-link');
    } else if (loginLink) {
        loginLink.textContent = 'Login';
    }
}

/* ======================================================== */
/* 3. Initialize All Events When Page Loads                 */
/* ======================================================== */
document.addEventListener('DOMContentLoaded', function () {
    let wishlistButtons = document.querySelectorAll('.wishlist-btn');
    for (let i = 0; i < wishlistButtons.length; i++) {
        wishlistButtons[i].addEventListener('click', function () {
            let productName = this.parentElement.querySelector('h3').textContent;
            addToWishlist(productName, this);
        });
    }

    setupLoginValidation();
    setupSignupValidation();
    updateHeaderAccount();
});