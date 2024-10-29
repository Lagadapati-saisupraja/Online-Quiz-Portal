const startQuizBtn = document.getElementById('start-quiz');
const loginBtn = document.getElementById('login-btn');
const authModal = document.getElementById('authModal');
const closeModalBtn = document.querySelector('.close-btn');
const signupForm = document.getElementById('signup-form');
const signinForm = document.getElementById('signin-form');
const switchToSignin = document.getElementById('switch-to-signin');
const switchToSignup = document.getElementById('switch-to-signup');

startQuizBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
});

loginBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
    authModal.style.display = 'none';
});

switchToSignin.addEventListener('click', () => {
    signupForm.classList.add('hidden');
    signinForm.classList.remove('hidden');
});

switchToSignup.addEventListener('click', () => {
    signinForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
});

window.addEventListener('click', (e) => {
    if (e.target === authModal) {
        authModal.style.display = 'none';
    }
});