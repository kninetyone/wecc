// Utility Functions
function showModal() {
    document.getElementById('login-modal').style.display = 'flex';
}

function hideModal() {
    document.getElementById('login-modal').style.display = 'none';
}

function resetForm() {
    document.getElementById('loginForm').reset();
    document.getElementById('loginMessage').innerText = '';
}

// Authentication Related Functions
function validateForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username is 'admin' and password is correct
    const storedPassword = localStorage.getItem('password');
    const newPassword = localStorage.getItem('newPassword');

    if (username === 'admin' && (password === storedPassword || password === newPassword)) {
        hideModal();
        resetForm();
        alert('Login successful!');
    } else if (username !== 'admin') {
        document.getElementById('loginMessage').innerText = 'Invalid username';
    } else {
        document.getElementById('loginMessage').innerText = 'Invalid password';
    }
}

function forgotPassword() {
    const newPassword = prompt("Enter your new password (maximum 8 characters):");
    if (newPassword && newPassword.length <= 8) {
        localStorage.setItem('newPassword', newPassword);
        alert('New password set successfully!');
    } else {
        alert('Forgot password process canceled or password length exceeds 8 characters.');
    }
}

function logout() {
    localStorage.removeItem('loggedIn');  // Assuming 'loggedIn' is a flag you set elsewhere
    alert("Logged out successfully!");
    window.location.href = 'login.html';  // Make sure to change 'Cupineken.html' to your actual login page
}

// Event Listeners
document.getElementById('loginButton').addEventListener('click', validateForm);
document.getElementById('resetButton').addEventListener('click', resetForm);
