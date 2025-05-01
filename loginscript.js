// Handle Signup
document.getElementById('signupForm')?.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Save credentials securely (demo purpose only)
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert('Sign up successful! Please log in.');
    window.location.href = 'login.html';
});
