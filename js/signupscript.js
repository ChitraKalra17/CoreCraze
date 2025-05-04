document.getElementById('signupForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Simple validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Save the credentials (for demo purposes only; not secure for real apps)
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert('Sign up successful! Please log in.');
    window.location.href = 'login.html';
});
