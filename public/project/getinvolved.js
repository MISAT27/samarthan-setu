const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const loginForm = document.querySelector('.form-box.login');
const registerForm = document.querySelector('.form-box.register');

registerBtn.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

loginBtn.addEventListener('click', () => {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});

window.addEventListener('DOMContentLoaded', () => {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});
