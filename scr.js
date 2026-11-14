// ==========================================
// 1. Handling Login Form Submission
// ==========================================
const loginForm = document.getElementById('login-form');
const statusMessage = document.getElementById('status-message');

if (loginForm) {
loginForm.addEventListener('submit', function (event) {
// Prevent default page reload on form submit
event.preventDefault();

    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');

    const email = emailInput ? emailInput.value.trim() : '';
    const password = passwordInput ? passwordInput.value.trim() : '';

    // Basic validation check
    if (!email || !password) {
        if (statusMessage) {
            statusMessage.textContent = 'Please fill in both email and password.';
            statusMessage.style.color = '#ef4444';
        }
        return;
    }

    // Create user object and save to localStorage
    const userData = {
        email: email,
        name: email.split('@')[0]
    };

    localStorage.setItem('specialGiftUser', JSON.stringify(userData));

    if (statusMessage) {
        statusMessage.textContent = 'Login successful! Redirecting...';
        statusMessage.style.color = '#3b82f6';
    }

    // Redirect to homepage after successful login
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1200);
});
}

// ==========================================
// 2. Reading User Data from Local Storage
// ==========================================
function getSpecialGiftUser() {
const savedUser = localStorage.getItem('specialGiftUser');
if (!savedUser) return null;

try {
    return JSON.parse(savedUser);
} catch (error) {
    return {
        email: savedUser,
        name: savedUser.split('@')[0]
    };
}
}

// ==========================================
// 3. Updating Nav Bar Link if User is Logged In
// ==========================================
function updateCustomerAccountInHeader() {
const user = getSpecialGiftUser();
if (!user) return;

const loginLink = document.querySelector('nav a[href="login.html"]');
if (loginLink) {
    loginLink.textContent = `Account: ${user.name}`;
    loginLink.classList.add('customer-account-link');
}
}

// Execute header update on script load
updateCustomerAccountInHeader();

// ==========================================
// 4. Reveal Animation Observer for Page Elements
// ==========================================
const revealElements = document.querySelectorAll('.reveal');
if (revealElements.length > 0) {
const revealObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
}
});
}, { threshold: 0.14 });

revealElements.forEach(element => revealObserver.observe(element));
}